import type grapesjs from 'grapesjs';
import loadTraits from './traits';
import loadBlocks from './blocks';
import loadComponents from './components';

export type PluginOptions = {
  /**
   * Which blocks to add.
   * @default ['form', 'input', 'textarea', 'select', 'button', 'label', 'checkbox', 'radio']
   */
   blocks?: string[];
};

const plugin: grapesjs.Plugin<PluginOptions> = (editor, opts = {}) => {

  const config: PluginOptions = {
    blocks: ['form', 'input', 'textarea', 'select', 'button', 'label', 'checkbox', 'radio'],
    ...opts
  };

  loadComponents(editor);
  loadTraits(editor);
  loadBlocks(editor, config);
};

export default plugin;
