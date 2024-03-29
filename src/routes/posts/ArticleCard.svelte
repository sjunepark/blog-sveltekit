<script lang="ts">
	import { format, parse } from '@formkit/tempo';
	import type { Post } from '$lib/types';

	export let post: Post;

	const maxLength = 200;

	const formatDate = (date: Date) => {
		const locale = 'en';
		return format(date, 'MMMM D, YYYY', locale);
	};

	const truncateText = (text: string, maxLength: number) => {
		if (text.length > maxLength) {
			return text.slice(0, maxLength) + '...';
		}
		return text;
	};
</script>

<article class="md:grid md:grid-cols-4 md:items-baseline">
	<div class="group relative flex flex-col items-start md:col-span-3">
		<h2 class="text-lg font-medium tracking-tight">
			<div
				class="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-accent opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-lg"
			/>
			<a href={`/posts/${post.slug}`}>
				<span class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
				<span class="relative z-10">{post.title}</span>
			</a>
		</h2>
		<time
			datetime={post.created}
			class="relative z-10 order-first mb-3 flex items-center pl-3.5 text-sm text-secondary-foreground md:hidden"
		>
			<span class="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
				<span
					class="h-4 w-0.5 rounded-full bg-secondary-foreground transition group-hover:bg-primary"
				></span>
			</span>
			{formatDate(parse(post.created))}
		</time>
		<p class="relative z-10 mt-2 text-sm font-light text-muted-foreground">
			{truncateText(post.description, maxLength)}
		</p>
		<div
			aria-hidden="true"
			class="none underline-effect relative z-10 mt-4 flex items-center pb-0.5 text-sm font-normal text-primary"
		>
			Read article<svg
				viewBox="0 0 16 16"
				fill="none"
				aria-hidden="true"
				class="ml-1 h-4 w-4 stroke-current"
				><path
					d="M6.75 5.75 9.25 8l-2.5 2.25"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				></path></svg
			>
		</div>
	</div>
	<time
		class="relative z-10 order-first mb-3 mt-1 flex hidden items-center text-sm text-secondary-foreground md:block"
		datetime={post.created}>{formatDate(parse(post.created))}</time
	>
</article>

<style>
	.underline-effect {
		background: linear-gradient(0deg, hsl(var(--primary) / 80%), hsl(var(--primary) / 0%)) no-repeat
			right bottom / 0 1px;
		transition: background-size 350ms;
		text-decoration: none;
	}

	.group:hover .underline-effect {
		background-size: 100% 2px;
		background-position-x: left;
	}
</style>
