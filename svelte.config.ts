import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex, escapeSvelte } from 'mdsvex';
import type { MdsvexOptions } from 'mdsvex';
import { getHighlighter } from 'shiki';
import type { Config } from '@sveltejs/kit';

const mdsvexOptions: MdsvexOptions = {
	extensions: ['.md'],
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const highlighter = await getHighlighter({
				themes: ['monokai'],
				langs: ['javascript', 'typescript', 'go']
			});

			await highlighter.loadLanguage('javascript', 'typescript', 'go');
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang: lang, theme: 'monokai' }));
			return `{@html \`${html}\`}`;
		}
	}
};

const config: Config = {
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
