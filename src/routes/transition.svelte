<script lang="ts">
	import { fade } from 'svelte/transition';

	export let url: string;
</script>

{#key url}
	<div class="flex w-full flex-1 flex-col" in:fade>
		<slot />
	</div>
{/key}
