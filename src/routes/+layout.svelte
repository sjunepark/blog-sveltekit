<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import Navbar from './navbar/Navbar.svelte';

	let { children } = $props();
</script>

<ModeWatcher />
<div class="relative flex w-full">
	<!-- Background -->
	<div class="absolute inset-0 flex w-full justify-center sm:px-8">
		<div class="flex w-full max-w-7xl lg:px-8">
			<div class="w-full bg-background ring-1 ring-border"></div>
		</div>
	</div>
	<div class="relative mx-auto w-full">
		<Navbar />
		<main class="mx-auto w-full max-w-7xl lg:px-8">
			{@render children()}
		</main>
	</div>
</div>
