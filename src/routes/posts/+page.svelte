<script lang="ts">
	import ArticleCard from './ArticleCard.svelte';

	export let data;
</script>

<div class="flex flex-col space-y-16">
	{#each data.posts as post (post.slug)}
		<ArticleCard {post} />
	{/each}
</div>
