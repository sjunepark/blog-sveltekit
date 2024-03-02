<script lang="ts">
	export let data;
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
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
	<div class="prose prose-stone dark:prose-invert">
		<svelte:component this={data.content} />
	</div>
</article>
