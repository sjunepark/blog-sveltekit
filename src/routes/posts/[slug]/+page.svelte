<script lang="ts">
	export let data;
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article
	class="prose prose-sm prose-stone mx-auto w-full dark:prose-invert sm:prose-base lg:prose-lg"
>
	<!-- Title -->
	<hgroup>
		<h1>{data.meta.title}</h1>
		<p>Published at {data.meta.date}</p>
	</hgroup>

	<!-- Tags -->
	<div class="">
		{#each data.meta.categories as category}
			<span class="">&num;{category}</span>
		{/each}
	</div>

	<!-- Post -->
	<div class="">
		<svelte:component this={data.content} />
	</div>
</article>
