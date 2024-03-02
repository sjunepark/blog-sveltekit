import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const post = await import(`../content/${params.slug}.mdx`);

		return {
			content: post.default,
			meta: post.metadata
		};
	} catch (e) {
		console.log(e);
		error(404, `Could not find ${params.slug}`);
	}
}
