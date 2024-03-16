<script lang="ts">
	import ArticleCard from './ArticleCard.svelte';

	export let data;
</script>

<div class="mt-4 flex h-full flex-col md:border-l md:border-border md:pl-6">
	<div class="h-full max-w-3xl flex-1 flex-col space-y-16">
		{#each data.posts as post (post.slug)}
			<ArticleCard {post} />
		{/each}
	</div>
</div>
