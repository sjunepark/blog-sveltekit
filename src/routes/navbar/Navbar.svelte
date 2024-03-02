<script lang="ts">
	import ThemeSwitcher from './ThemeSwitcher.svelte';
</script>

<header
	class=" mx-auto flex w-full max-w-screen-lg items-center justify-end gap-4 bg-gradient-to-t from-transparent from-0% via-background/50 via-10% to-background to-50% md:justify-center"
>
	<div class="flex flex-1">Home</div>
	<!--MobileNavigation-->
	<nav class="pointer-events-auto hidden md:block">
		<ul class="flex rounded-full px-3 font-medium shadow-md shadow-border ring-1 ring-border">
			<li><a href="/" class="block px-3 py-2">About</a></li>
			<li><a href="/" class="block px-3 py-2">Projects</a></li>
		</ul>
	</nav>
	<div class="flex justify-end md:flex-1">
		<ThemeSwitcher />
	</div>
</header>
