export default function (editor, opt = {}) {
  const c = opt;
  const category = { id: 'forms', label: 'Forms' };
  const bm = editor.BlockManager;
  const hasBlock = id => c.blocks.indexOf(id) >= 0;

  hasBlock('form') && bm.add('form', {
    label: 'Form',
    media: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 5.5c0-.3-.5-.5-1.3-.5H3.4c-.8 0-1.3.2-1.3.5v3c0 .3.5.5 1.3.5h17.4c.8 0 1.3-.2 1.3-.5v-3zM21 8H3V6h18v2zM22 10.5c0-.3-.5-.5-1.3-.5H3.4c-.8 0-1.3.2-1.3.5v3c0 .3.5.5 1.3.5h17.4c.8 0 1.3-.2 1.3-.5v-3zM21 13H3v-2h18v2z"/><rect width="10" height="3" x="2" y="15" rx=".5"/></svg>',
    category,
    content: {
      type: 'form',
      components: [
        {
          components: [
            { type: 'label', components: 'Name' },
            { type: 'input', attributes: { type: 'text' } },
          ]
        }, {
          components: [
            { type: 'label', components: 'Email' },
            { type: 'input', attributes: { type: 'email' } },
          ]
        }, {
          components: [
            { type: 'label', components: 'Gender' },
            { type: 'checkbox', attributes: { value: 'M' } },
            { type: 'label', components: 'M' },
            { type: 'checkbox', attributes: { value: 'F' } },
            { type: 'label', components: 'F' },
          ]
        }, {
          components: [
            { type: 'label', components: 'Message' },
            { type: 'textarea' },
          ]
        }, {
          components: [
            { type: 'button' },
          ]
        },
      ]
    }
  });

  hasBlock('input') && bm.add('input', {
    label: 'Input',
    media: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 9c0-.6-.5-1-1.3-1H3.4C2.5 8 2 8.4 2 9v6c0 .6.5 1 1.3 1h17.4c.8 0 1.3-.4 1.3-1V9zm-1 6H3V9h18v6z"/><path d="M4 10h1v4H4z"/></svg>',
    category,
    content: { type: 'input' },
  });

  hasBlock('textarea') && bm.add('textarea', {
    label: 'Textarea',
    media: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 7.5c0-.9-.5-1.5-1.3-1.5H3.4C2.5 6 2 6.6 2 7.5v9c0 .9.5 1.5 1.3 1.5h17.4c.8 0 1.3-.6 1.3-1.5v-9zM21 17H3V7h18v10z"/><path d="M4 8h1v4H4zM19 7h1v10h-1zM20 8h1v1h-1zM20 15h1v1h-1z"/></svg>',
    category,
    content: { type: 'textarea' },
  });

  hasBlock('select') && bm.add('select', {
    label: 'Select',
    media: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 9c0-.6-.5-1-1.3-1H3.4C2.5 8 2 8.4 2 9v6c0 .6.5 1 1.3 1h17.4c.8 0 1.3-.4 1.3-1V9zm-1 6H3V9h18v6z"/><path d="M18.5 13l1.5-2h-3zM4 11.5h11v1H4z"/></svg>',
    category,
    content: { type: 'select' },
  });

  hasBlock('button') && bm.add('button', {
    label: 'Button',
    media: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 9c0-.6-.5-1-1.3-1H3.4C2.5 8 2 8.4 2 9v6c0 .6.5 1 1.3 1h17.4c.8 0 1.3-.4 1.3-1V9zm-1 6H3V9h18v6z"/><path d="M4 11.5h16v1H4z"/></svg>',
    category,
    content: { type: 'button' },
  });

  hasBlock('label') && bm.add('label', {
    label: 'Label',
    media: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 11.9c0-.6-.5-.9-1.3-.9H3.4c-.8 0-1.3.3-1.3.9V17c0 .5.5.9 1.3.9h17.4c.8 0 1.3-.4 1.3-.9V12zM21 17H3v-5h18v5z"/><rect width="14" height="5" x="2" y="5" rx=".5"/><path d="M4 13h1v3H4z"/></svg>',
    category,
    content: { type: 'label' },
  });

  hasBlock('checkbox') && bm.add('checkbox', {
    label: 'Checkbox',
    attributes: { class:'fa fa-check-square' },
    category,
    content: { type: 'checkbox' },
  });

  hasBlock('radio') && bm.add('radio', {
    label: 'Radio',
    attributes: { class:'fa fa-dot-circle-o' },
    category,
    content: { type: 'radio' },
  });
}
