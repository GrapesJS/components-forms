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

  /**
   * Category name.
   * @default 'Forms'
   */
   category?: grapesjs.BlockOptions["category"];
};

const plugin: grapesjs.Plugin<PluginOptions> = (editor, opts = {}) => {

  const config: Required<PluginOptions> = {
    blocks: ['form', 'input', 'textarea', 'select', 'button', 'label', 'checkbox', 'radio'],
    category: { id: 'forms', label: 'Forms' },
    ...opts
  };

  loadComponents(editor);
  loadTraits(editor);
  loadBlocks(editor, config);
};

export default plugin;
