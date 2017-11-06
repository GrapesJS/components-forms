export default function (editor, opt = {}) {
  const trm = editor.TraitManager;
  const textTrat = trm.getType('text');

  trm.addType('content', {
    events:{
      'keyup': 'onChange',
    },

    onValueChange: function () {
      var md = this.model;
      var target = md.target;
      target.set('content', md.get('value'));
    },

    getInputEl: function() {
      if(!this.inputEl) {
        this.inputEl = textTrat.prototype.getInputEl.bind(this)();
        this.inputEl.value = this.target.get('content');
      }
      return this.inputEl;
    }
  });


  trm.addType('select-options', {
    events:{
      'keyup': 'onChange',
    },

    onValueChange: function () {
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

    getInputEl: function() {
      if (!this.$input) {
        var md = this.model;
        var trg = this.target;
        var name = md.get('name');
        var optionsStr = '';
        var opts = {placeholder: ''};
        var options = trg.get('components');

        for (var i = 0; i < options.length; i++) {
          var option = options.models[i];
          var optAttr = option.get('attributes');
          var optValue = optAttr.value || '';
          optionsStr += `${optValue}::${option.get('content')}\n`;
        }

        this.$input = document.createElement('textarea');
        this.$input.value = optionsStr;
      }
      return this.$input;
  	},
  });
}
