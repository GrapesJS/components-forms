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
   * Category name for blocks.
   * @default 'Forms'
   */
   category?: grapesjs.BlockOptions["category"];

  /**
   * Add custom block options, based on block id.
   * @default (blockId) => ({})
   * @example (blockId) => blockId === 'input' ? { attributes: {...} } : {};
   */
   block?: (blockId: string) => ({});
};

const plugin: grapesjs.Plugin<PluginOptions> = (editor, opts = {}) => {

  const config: Required<PluginOptions> = {
    blocks: ['form', 'input', 'textarea', 'select', 'button', 'label', 'checkbox', 'radio'],
    category: { id: 'forms', label: 'Forms' },
    block: () => ({}),
    ...opts
  };

  loadComponents(editor);
  loadTraits(editor);
  loadBlocks(editor, config);
};

export default plugin;
