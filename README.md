# GrapesJS Forms

This plugin adds some of the basic form components and blocks which help in working with forms easier

[Demo](http://grapesjs.com/demo.html)
<br/>

Available components:
`form`
`input`
`textarea`
`select`
`option`
`checkbox`
`radio`
`button`
`label`



## Options

| Option | Description | Default|
| --------------- | -------------------------------- | ----------------------------------------------------------------------------------------|
|`blocks`|Which blocks to add| `['form', 'input', 'textarea', 'select', 'button', 'label', 'checkbox', 'radio']` (all) |
|`category`|Category name|`Forms`|
|`block`|Add custom block options, based on block id.|`(blockId) => ({})`|



## Download

* CDN
  * `https://unpkg.com/grapesjs-plugin-forms`
* NPM
  * `npm i grapesjs-plugin-forms`
* GIT
  * `git clone https://github.com/artf/grapesjs-plugin-forms.git`



## Usage

Directly in the browser

```html
<link href="path/to/grapes.min.css" rel="stylesheet"/>
<script src="path/to/grapes.min.js"></script>
<script src="path/to/grapesjs-plugin-forms.min.js"></script>

<div id="gjs"></div>

<script type="text/javascript">
  var editor = grapesjs.init({
      fromElement: 1,
      container : '#gjs',
      plugins: ['grapesjs-plugin-forms'],
      pluginsOpts: {
        'grapesjs-plugin-forms': {/* ...options */}
      }
  });
</script>
```

Modern javascript

```js
import grapesjs from 'grapesjs';
import gjsForms from 'grapesjs-plugin-forms';

const editor = grapesjs.init({
  container : '#gjs',
  // ...
  plugins: [gjsForms],
  pluginsOpts: {
    [gjsForms]: { /* options */ }
  }
  // or
  plugins: [
    editor => gjsForms(editor, { /* options */ }),
  ],
});
```

## I18n

If you need to change some of the components/traits labels, you can rely on the i18n module, here a complete example for the default `en` language

```js
editor.I18n.addMessages({
  en: {
    blockManager: {
      labels: {
        form: 'EN Form',
        input: 'EN Input',
        textarea: 'EN Textarea',
        select: 'EN Select',
        checkbox: 'EN Checkbox',
        radio: 'EN Radio',
        button: 'EN Button',
        label: 'EN Label',
      },
      categories: {
        forms: 'EN Forms',
      }
    },
    domComponents: {
      names: {
        form: 'EN Form',
        input: 'EN Input',
        textarea: 'EN Textarea',
        select: 'EN Select',
        checkbox: 'EN Checkbox',
        radio: 'EN Radio',
        button: 'EN Button',
        label: 'EN Label',
      },
    },
    traitManager: {
      traits: {
        labels: {
          method: 'EN Method',
          action: 'EN Action',
          name: 'EN Name',
          placeholder: 'EN Placeholder',
          type: 'EN Type',
          required: 'EN Required',
          options: 'EN Options',
          id: 'EN Id',
          for: 'EN For',
          value: 'EN Value',
          checked: 'EN Checked',
          text: 'EN Text',
        },
        options: {
          type: {
            text: 'EN Text',
            email: 'EN Email',
            password: 'EN Password',
            number: 'EN Number',
            submit: 'EN Submit',
            reset: 'EN Reset',
            button: 'EN Button',
          }
        }
      },
    },
  }
});
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

Start the dev server

```sh
$ npm start
```


## License

BSD 3-Clause
