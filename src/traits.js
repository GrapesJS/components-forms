export default function (editor, opt = {}) {
  const trm = editor.TraitManager;

  trm.addType('select-options', {
    events:{
      'keyup': 'onChange',
    },

    onValueChange() {
      var optionsStr = this.model.get('value').trim();
      var options = optionsStr.split('\n');
      var optComps = [];

      for (var i = 0; i < options.length; i++) {
        var optionStr = options[i];
        var option = optionStr.split('::');
        var opt = {
          tagName: 'option',
          attributes: {}
        };
        if(option[1]) {
          opt.content = option[1];
          opt.attributes.value = option[0];
        } else {
          opt.content = option[0];
          opt.attributes.value = option[0];
        }
        optComps.push(opt);
      }

      var comps = this.target.get('components');
      comps.reset(optComps);
      this.target.view.render();
    },

    getInputEl() {
      if (!this.$input) {
        const optionsStr = [];
        const options = this.target.components();

        for (let i = 0; i < options.length; i++) {
          const option = options.models[i];
          const optAttr = option.get('attributes');
          const optValue = optAttr.value || '';
          const optTxtNode = option.components().models[0];
          const optLabel = optTxtNode && optTxtNode.get('content') || '';
          optionsStr.push(`${optValue}::${optLabel}`);
        }

        this.$input = document.createElement('textarea');
        this.$input.value = optionsStr.join("\n");
      }
      return this.$input;
  	},
  });
}
