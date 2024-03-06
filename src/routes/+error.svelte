<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="prose mx-auto dark:prose-invert">
	<h1>{$page.status}: {$page.error?.message}</h1>
	<p>Something went wrong!</p>
</div>
