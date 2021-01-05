export default function(editor, opt = {}) {
  const c = opt;
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
    label: c.labelTraitId,
  };

  const forTrait = {
    name: 'for',
    label: c.labelTraitFor,
  };

  const nameTrait = {
    name: 'name',
    label: c.labelTraitName,
  };

  const placeholderTrait = {
    name: 'placeholder',
    label: c.labelTraitPlaceholder,
  };

  const valueTrait = {
    name: 'value',
    label: c.labelTraitValue,
  };

  const requiredTrait = {
    type: 'checkbox',
    name: 'required',
    label: c.labelTraitRequired,
  };

  const checkedTrait = {
    label: c.labelTraitChecked,
    type: 'checkbox',
    name: 'checked',
  };

  const viewNoDefClick = {
    events: {
      'mousedown': 'handleClick',
    },

    handleClick(e) {
      e.preventDefault();
    },
  };

  domc.addType(typeForm, {
    isComponent: el => el.tagName == 'FORM',

    model: {
      defaults: {
        droppable: ':not(form)',
        draggable: ':not(form)',
        traits: [{
          type: 'select',
          label: c.labelTraitMethod,
          name: 'method',
          options: [
            {value: 'get', name: 'GET'},
            {value: 'post', name: 'POST'},
          ],
        }, {
          label: c.labelTraitAction,
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
        name: c.labelInputName,
        tagName: 'input',
        draggable: 'form, form *',
        droppable: false,
        traits: [
          nameTrait,
          placeholderTrait,
          {
            label: c.labelTraitType,
            type: 'select',
            name: 'type',
            options: [
              {value: 'text', name: c.labelTypeText},
              {value: 'email', name: c.labelTypeEmail},
              {value: 'password', name: c.labelTypePassword},
              {value: 'number', name: c.labelTypeNumber},
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
        name: c.labelTextareaName,
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
        name: c.labelSelectName,
        tagName: 'select',
        traits: [
          nameTrait,
          {
            label: c.labelTraitOptions,
            type: 'select-options'
          },
          requiredTrait
        ],
      },
    },

    view: viewNoDefClick,
  });





  // CHECKBOX
  domc.addType(typeCheckbox, {
    extend: typeInput,
    isComponent: el => el.tagName == 'INPUT' && el.type == 'checkbox',

    model: {
      defaults: {
        name: c.labelCheckboxName,
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
        name: c.labelRadioName,
        attributes: { type: 'radio' },
      },
    },
  });





  domc.addType(typeButton, {
    extend: typeInput,
    isComponent: el => el.tagName == 'BUTTON',

    model: {
      defaults: {
        name: c.labelButtonName,
        tagName: 'button',
        text: '',
        traits: [{
          name: 'text',
          changeProp: true,
        },{
          label: c.labelTraitType,
          type: 'select',
          name: 'type',
          options: [
            {value: 'submit', name: c.labelTypeSubmit},
            {value: 'reset', name: c.labelTypeReset},
            {value: 'button', name: c.labelTypeButton},
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
        name: c.labelNameLabel,
        tagName: 'label',
        traits: [forTrait],
      },
    },
  });
}
