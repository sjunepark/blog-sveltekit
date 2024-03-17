import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex, escapeSvelte } from 'mdsvex';
import { getHighlighter } from 'shiki';
import remarkUnwrapImages from 'remark-unwrap-images';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';
import {
	transformerNotationHighlight,
	transformerNotationWordHighlight,
	transformerNotationDiff
} from '@shikijs/transformers';
import rehypeExternalLinks from 'rehype-external-links';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const highlighter = await getHighlighter({
				themes: ['light-plus', 'dark-plus'],
				langs: ['javascript', 'typescript', 'go', 'shell']
			});
			await highlighter.loadLanguage('javascript', 'typescript', 'go', 'shell');
			const html = escapeSvelte(
				highlighter.codeToHtml(code, {
					lang,
					themes: {
						dark: 'dark-plus',
						light: 'light-plus'
					},
					transformers: [
						transformerNotationHighlight(),
						transformerNotationWordHighlight(),
						transformerNotationDiff()
					]
				})
			);
			return `{@html \`${html}\`}`;
		}
	},
	remarkPlugins: [remarkUnwrapImages, [remarkToc, { tight: true }]],
	rehypePlugins: [
		rehypeSlug,
		[rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }]
	]
};

/**
 * @type {import('@sveltejs/kit').Config}
 */
const config = {
	extensions: ['.svelte', '.md'],
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	}
};

export default config;
