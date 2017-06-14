grapesjs.plugins.add('gjs-plugin-forms', (editor, opts) => {
  let c = opts || {};
  let config = editor.getConfig();
  let pfx = config.stylePrefix;

  let defaults = {
    blocks: ['form', 'input', 'textarea', 'select',
      'button', 'label', 'checkbox', 'radio'],
    labelTraitMethod: 'Method',
    labelTraitAction: 'Action',
    labelTraitState: 'State',
    labelTraitId: 'ID',
    labelTraitFor: 'For',
    labelInputName: 'Input',
    labelTextareaName: 'Textarea',
    labelSelectName: 'Select',
    labelCheckboxName: 'Checkbox',
    labelRadioName: 'Radio',
    labelButtonName: 'Button',
    labelTraitName: 'Name',
    labelTraitPlaceholder: 'Placeholder',
    labelTraitValue: 'Value',
    labelTraitRequired: 'Required',
    labelTraitType: 'Type',
    labelTraitOptions: 'Options',
    labelTraitChecked: 'Checked',
    labelTypeText: 'Text',
    labelTypeEmail: 'Email',
    labelTypePassword: 'Password',
    labelTypeNumber: 'Number',
    labelTypeSubmit: 'Submit',
    labelTypeReset: 'Reset',
    labelTypeButton: 'Button',
    labelNameLabel: 'Label',
    labelForm: 'Form',
    labelSelectOption: '- Select option -',
    labelOption: 'Option',
    labelStateNormal: 'Normal',
    labelStateSuccess: 'Success',
    labelStateError: 'Error',
  };

  for (let name in defaults) {
    if (!(name in c))
      c[name] = defaults[name];
  }

  // Add components
  let loadComponents = require('./components');
  loadComponents.default(editor, c);

  // Add traits
  require('./traits').default(editor, c);

  // Add blocks
  let loadBlocks = require('./blocks');
  loadBlocks.default(editor, c);

});
