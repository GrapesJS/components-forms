export default function (editor, opt = {}) {
  const c = opt;
  let bm = editor.BlockManager;

  var blockForm = c.blockForm || 'Form Block';
  var blockInput = c.blockInput || 'Input';
  var blockRadio = c.blockRadio || 'Radio Input';
  var blockCheckbox = c.blockCheckbox || 'Checkbox';
  var blockSelect = c.blockSelect || 'Select Input';
  var nameLabel = c.inputName || 'Name';
  var emailLabel = c.inputEmail || 'Email';
  var inputText = c.inputText || 'Text here';
  var inputRadio = c.inputRadio || 'Radio item';
  var inputCheckbox = c.inputCheckbox || 'Checkbox item';
  var inputSelect = c.inputSelect || 'Select the option';
  var inputOpt = c.inputOption || 'Option';
  var typeYourName = c.typeYourName || 'Type your name';
  var typeYourEmail = c.typeYourEmail || 'Type your email';
  var btnSubmit = c.buttonSubmit || 'Submit';
  var formMsgSuccess = c.formMsgSuccess || 'Thanks! We received your request';
  var formMsgError = c.formMsgError || 'An error occurred while processing your request, try again!';

  // Forms
  bm.add('form', {
    label: blockForm,
    category: 'Forms',
    attributes: {class:'fa fa-list-alt'},
    content: '<form action="' + c.formServer + '" class="form" data-gjs-custom-name="Form block" method="POST">' +
      '<input type="hidden" name="userid" value="' + c.userId + '">' +
      '<input type="hidden" name="pageid" value="' + c.pageId + '">' +
      '<div class="form-group"><label class="input-label">'+nameLabel+'</label><input placeholder="'+typeYourName+'" class="form-control"></div>' +
      '<div class="form-group"><label class="input-label">'+emailLabel+'</label><input type="email" placeholder="'+typeYourEmail+'" class="form-control" required="true"></div>' +
      '<div class="form-group"><button type="submit" class="btn">'+btnSubmit+'</button></div>' +
      '<div class="alert alert-success" role="alert" data-gjs-form-state-type="success" data-form-state="success" style="display:none">'+formMsgSuccess+'</div>' +
      '<div class="alert alert-danger" role="alert" data-gjs-form-state-type="error" data-form-state="error" style="display:none">'+formMsgError+'</div>' +
    '</form>',
  });

  bm.add('input', {
    label: `
    <svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M22,9 C22,8.4 21.5,8 20.75,8 L3.25,8 C2.5,8 2,8.4 2,9 L2,15 C2,15.6 2.5,16 3.25,16 L20.75,16 C21.5,16 22,15.6 22,15 L22,9 Z M21,15 L3,15 L3,9 L21,9 L21,15 Z" class="gjs-block-svg-path"></path>
      <polygon points="4 10 5 10 5 14 4 14" class="gjs-block-svg-path"></polygon>
    </svg>
    <div class="gjs-block-label">Input</div>`,
    category: 'Forms',
    content: {
      type: 'input',
      classes: ['input']
    },
  });

  bm.add('textarea', {
    label: `
    <svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path class="gjs-block-svg-path" d="M22,7.5 C22,6.6 21.5,6 20.75,6 L3.25,6 C2.5,6 2,6.6 2,7.5 L2,16.5 C2,17.4 2.5,18 3.25,18 L20.75,18 C21.5,18 22,17.4 22,16.5 L22,7.5 Z M21,17 L3,17 L3,7 L21,7 L21,17 Z"></path>
      <polygon class="gjs-block-svg-path" points="4 8 5 8 5 12 4 12"></polygon>
      <polygon class="gjs-block-svg-path" points="19 7 20 7 20 17 19 17"></polygon>
      <polygon class="gjs-block-svg-path" points="20 8 21 8 21 9 20 9"></polygon>
      <polygon class="gjs-block-svg-path" points="20 15 21 15 21 16 20 16"></polygon>
    </svg>
    <div class="gjs-block-label">Textarea</div>`,
    category: 'Forms',
    content: {
      type: 'textarea',
      classes: ['textarea']
    },
  });

  bm.add('select-input', {
    label: blockSelect,
    attributes: {class:'fa fa-caret-square-o-down'},
    category: 'Forms',
    content: '<select class="form-control"><option>'+inputSelect+'</option><option value="1">'+inputOpt+' 1</option></select>',
  });

  bm.add('checkbox-input', {
    label: blockCheckbox,
    attributes: {class:'fa fa-check-square'},
    category: 'Forms',
    content: {type: 'checkbox-plus'},
  });

  bm.add('radio-input', {
    label: blockRadio,
    attributes: {class:'fa fa-dot-circle-o'},
    category: 'Forms',
    content: '<div class="form-group form-group-lined"><label class="form-group-radio"><input type="radio"/><span>'+inputRadio+'</span></label></div>',
  });

  bm.add('switch-input', {
    label: 'Switch',
    attributes: {class:'fa fa-toggle-on'},
    category: 'Forms',
    content: `
    <div class="switch" data-gjs-custom-name="Switch">
        <input type="hidden" name="swt-name" value="0" class="switch-hidden">
        <input type="checkbox" name="swt-name" class="switch-input" value="1" style="display:none">
        <i class="switch-track" data-gjs-custom-name="Switch track" data-gjs-droppable="false">
          <i class="switch-thumb" data-gjs-custom-name="Switch thumb" data-gjs-removable="false" data-gjs-copyable="false" data-gjs-draggable="false"></i>
        </i>
        <span class="switch-label"> Label switch </span>
    </div>`,
  });
}
