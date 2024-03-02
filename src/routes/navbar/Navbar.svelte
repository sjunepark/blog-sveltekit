<script lang="ts">
	import ThemeSwitcher from './ThemeSwitcher.svelte';
</script>

<header class="sticky top-0 z-50 mx-auto flex h-16 max-w-prose gap-4 pt-6">
	<div class="flex flex-1 justify-end md:justify-center">
		<div class="flex flex-1">Home</div>
		<!--MobileNavigation-->
		<nav class="pointer-events-auto hidden md:block">
			<ul
				class="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10"
			>
				<li>About</li>
				<li>Articles</li>
			</ul>
		</nav>
		<div class="flex justify-end md:flex-1">
			<ThemeSwitcher />
		</div>
	</div>
</header>
