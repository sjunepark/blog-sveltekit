<script lang="ts">
	import ThemeSwitcher from './ThemeSwitcher.svelte';
</script>

<header
	class="sticky top-0 z-50 mx-auto flex w-full gap-4 bg-gradient-to-t from-transparent from-0% via-background/50 via-10% to-background to-50% pb-24 pt-6"
>
	<div class="mx-auto flex max-w-screen-md flex-1 justify-end md:justify-center">
		<div class="flex flex-1">Home</div>
		<!--MobileNavigation-->
		<nav class="pointer-events-auto hidden md:block">
			<ul class="flex rounded-full px-3 font-medium shadow-sm shadow-stone-50 ring-1 ring-border">
				<li><a href="/" class="block px-3 py-2">About</a></li>
				<li><a href="/" class="block px-3 py-2">Projects</a></li>
			</ul>
		</nav>
		<div class="flex justify-end md:flex-1">
			<ThemeSwitcher />
		</div>
	</div>
</header>
