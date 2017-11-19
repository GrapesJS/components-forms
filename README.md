# GrapesJS Forms

This plugin adds some basic form components and blocks to help working with forms easier

[Demo](http://grapesjs.com/demo.html)
<br/>

New components:
`form`
`input`
`textarea`
`select`
`checkbox`
`radio`
`button`
`label`



## Options

* `blocks` Which blocks to add, default: `['form', 'input', 'textarea', 'select', 'button', 'label', 'checkbox', 'radio']` (all),
* `labelTraitMethod` Method trait label, default: 'Method',
* `labelTraitAction` Action trait label, default: 'Action',
* `labelTraitState` State trait label,  default: 'State',
* `labelTraitId` ID trait label, default: 'ID',
* `labelTraitFor` For trait label, default: 'For',
* `labelInputName` Input name label, default: 'Input',
* `labelTextareaName` Textarea name label, default: 'Textarea',
* `labelSelectName` Select name label, default: 'Select',
* `labelCheckboxName` Checkbox name label, default: 'Checkbox',
* `labelRadioName` Radio name label, default: 'Radio',
* `labelButtonName` Button name label, default: 'Button',
* `labelTraitName` Name trait label, default: 'Name',
* `labelTraitPlaceholder` Placeholder trait label, default: 'Placeholder',
* `labelTraitValue` Value trait label, default: 'Value',
* `labelTraitRequired` Required trait label, default: 'Required',
* `labelTraitType` Type trait label, default: 'Type',
* `labelTraitOptions` Options trait label, default: 'Options',
* `labelTraitChecked` Checked trait label, default: 'Checked',
* `labelTypeText` Text type label, default: 'Text',
* `labelTypeEmail` Email type label, default: 'Email',
* `labelTypePassword` Password type label, default: 'Password',
* `labelTypeNumber` Number type label, default: 'Number',
* `labelTypeSubmit` Submit type label, default: 'Submit',
* `labelTypeReset` Reset type label, default: 'Reset',
* `labelTypeButton` Button type label, default: 'Button',
* `labelNameLabel` Label type label, default: 'Label',
* `labelForm` Form type label, default: 'Form',
* `labelSelectOption` Select option type label, default: '- Select option -',
* `labelOption` Option label, default: 'Option'



## Download

* `npm i grapesjs-plugin-forms`



## Usage

```html
<link href="path/to/grapes.min.css" rel="stylesheet"/>
<script src="path/to/grapes.min.js"></script>
<script src="path/to/grapesjs-plugin-forms.min.js"></script>

<div id="gjs"></div>

<script type="text/javascript">
  var editor = grapesjs.init({
      fromElement: 1,
      container : '#gjs',
      plugins: ['gjs-plugin-forms'],
      pluginsOpts: {
        'gjs-plugin-forms': {/* ...options */}
      }
  });
</script>
```



## Development

Clone the repository

```sh
$ git clone https://github.com/artf/grapesjs-plugin-forms.git
$ cd grapesjs-plugin-forms
```

Install it

```sh
$ npm i
```

The plugin relies on GrapesJS via `peerDependencies` so you have to install it manually (without adding it to package.json)

```sh
$ npm i grapesjs --no-save
```

Start the dev server

```sh
$ npm start
```


## License

BSD 3-Clause
