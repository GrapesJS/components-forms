export default function(editor, opt = {}) {
  const domc = editor.DomComponents;
  const typeForm = 'form';
  const typeInput = 'input';
  const typeTextarea = 'textarea';
  const typeSelect = 'select';
  const typeCheckbox = 'checkbox';
  const typeRadio = 'radio';
  const typeButton = 'button';
  const typeLabel = 'label';

  const idTrait = {
    name: 'id',
  };

  const forTrait = {
    name: 'for',
  };

  const nameTrait = {
    name: 'name',
  };

  const placeholderTrait = {
    name: 'placeholder',
  };

  const valueTrait = {
    name: 'value',
  };

  const requiredTrait = {
    type: 'checkbox',
    name: 'required',
  };

  const checkedTrait = {
    type: 'checkbox',
    name: 'checked',
  };

  domc.addType(typeForm, {
    isComponent: el => el.tagName == 'FORM',

    model: {
      defaults: {
        droppable: ':not(form)',
        draggable: ':not(form)',
        traits: [{
          type: 'select',
          name: 'method',
          options: [
            {value: 'get', name: 'GET'},
            {value: 'post', name: 'POST'},
          ],
        }, {
          name: 'action',
        }],
      },
    },

    view: {
      events: {
        submit: e => e.preventDefault(),
      }
    },
  });





  // INPUT
  domc.addType(typeInput, {
    isComponent: el => el.tagName == 'INPUT',

    model: {
      defaults: {
        tagName: 'input',
        draggable: 'form, form *',
        droppable: false,
        traits: [
          nameTrait,
          placeholderTrait,
          {
            type: 'select',
            name: 'type',
            options: [
              { value: 'text' },
              { value: 'email' },
              { value: 'password' },
              { value: 'number' },
            ]
          },
          requiredTrait
        ],
      },
    },

    extendFnView: ['updateAttributes'],
    view: {
      updateAttributes() {
        this.el.setAttribute('autocomplete', 'off');
      },
    }
  });





  // TEXTAREA
  domc.addType(typeTextarea, {
    extend: typeInput,
    isComponent: el => el.tagName == 'TEXTAREA',

    model: {
      defaults: {
        tagName: 'textarea',
        traits: [
          nameTrait,
          placeholderTrait,
          requiredTrait
        ]
      },
    },
  });





  // SELECT
  domc.addType(typeSelect, {
    extend: typeInput,
    isComponent: el => el.tagName == 'SELECT',

    model: {
      defaults: {
        tagName: 'select',
        traits: [
          nameTrait,
          {
            name: 'options',
            type: 'select-options'
          },
          requiredTrait
        ],
      },
    },

    view: {
      events: {
        mousedown: e => e.preventDefault(),
      },
    },
  });





  // CHECKBOX
  domc.addType(typeCheckbox, {
    extend: typeInput,
    isComponent: el => el.tagName == 'INPUT' && el.type == 'checkbox',

    model: {
      defaults: {
        copyable: false,
        attributes: { type: 'checkbox' },
        traits: [
          idTrait,
          nameTrait,
          valueTrait,
          requiredTrait,
          checkedTrait
        ],
      },
    },

    view: {
      events: {
        click: e => e.preventDefault(),
      },

      init() {
        this.listenTo(this.model, 'change:attributes:checked', this.handleChecked);
      },

      handleChecked() {
        this.el.checked = !!this.model.get('attributes').checked;
      },
    },
  });





  // RADIO
  domc.addType(typeRadio, {
    extend: typeCheckbox,
    isComponent: el => el.tagName == 'INPUT' && el.type == 'radio',

    model: {
      defaults: {
        attributes: { type: 'radio' },
      },
    },
  });





  domc.addType(typeButton, {
    extend: typeInput,
    isComponent: el => el.tagName == 'BUTTON',

    model: {
      defaults: {
        tagName: 'button',
        text: '',
        traits: [
          {
            name: 'text',
            changeProp: true,
          }, {
            type: 'select',
            name: 'type',
            options: [
              { value: 'submit' },
              { value: 'reset' },
              { value: 'button' },
            ]
        }]
      },

      init() {
        const comps = this.components();
        const tChild =  comps.length === 1 && comps.models[0];
        const text = (tChild && tChild.is('textnode') && tChild.get('content')) || '';
        this.set({ text });
        this.on('change:text', this.__onTextChange);
      },

      __onTextChange() {
        this.components(this.get('text'));
      },
    },

    view: {
      events: {
        click: e => e.preventDefault(),
      },
    },
  });





  // LABEL
  domc.addType(typeLabel, {
    extend: 'text',
    isComponent: el => el.tagName == 'LABEL',

    model: {
      defaults: {
        tagName: 'label',
        traits: [forTrait],
      },
    },
  });
}
