import type grapesjs from 'grapesjs';
import { typeOption } from './components';

export default function (editor: grapesjs.Editor) {
  const trm = editor.TraitManager;

  trm.addType('select-options', {
    // @ts-ignore
    events:{
      keyup: 'onChange',
    },

    onValueChange() {
      // @ts-ignore
      const { model, target } = this;
      const optionsStr = model.get('value').trim();
      const options = optionsStr.split('\n');
      const optComps = [];

      for (let i = 0; i < options.length; i++) {
        const optionStr = options[i];
        const option = optionStr.split('::');
        optComps.push({
          type: typeOption,
          components: option[1] || option[0],
          attributes: { value: option[0] },
        });
      }

      target.components().reset(optComps);
      target.view.render();
    },

    getInputEl() {
      // @ts-ignore
      if (!this.$input) {
        const optionsArr = [];
        // @ts-ignore
        const options = this.target.components();

        for (let i = 0; i < options.length; i++) {
          const option = options.models[i];
          const optAttr = option.get('attributes');
          const optValue = optAttr.value || '';
          const optTxtNode = option.components().models[0];
          const optLabel = optTxtNode && optTxtNode.get('content') || '';
          optionsArr.push(`${optValue}::${optLabel}`);
        }

        // @ts-ignore
        this.$input = document.createElement('textarea');
        // @ts-ignore
        this.$input.value = optionsArr.join("\n");
      }
      // @ts-ignore
      return this.$input;
  	},
  });
}
