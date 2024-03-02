<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import ThemeSwitcher from './navbar/ThemeSwitcher.svelte';
	// noinspection ES6UnusedImports
	import * as Popover from '$lib/shadcn/ui/popover';
	import { Button } from '$lib/shadcn/ui/button';
	import HamburgerMenu from 'svelte-radix/HamburgerMenu.svelte';

	let { children } = $props();
</script>

<ModeWatcher />
<div class="relative mx-auto grid w-full max-w-7xl px-4 sm:px-8 md:px-12">
	<!-- Background -->
	<div class="absolute inset-0 -z-50 mx-auto flex w-full justify-center px-4 sm:px-8 md:px-12">
		<div class="w-full bg-background ring-1 ring-border"></div>
	</div>
	<header
		class="sticky top-0 z-50 mx-auto flex w-full max-w-screen-lg items-center justify-end gap-4 bg-gradient-to-b from-background from-65% via-background/30 via-90% px-4 pb-12 pt-6 sm:justify-center sm:px-8 md:px-12 md:pb-16"
	>
		<div class="flex flex-1">Home</div>
		<!--MobileNavigation-->
		<nav class="sm:hidden">
			<Popover.Root>
				<Popover.Trigger>
					<Button
						variant="outline"
						size="icon"
						class="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
						><HamburgerMenu /></Button
					>
				</Popover.Trigger>
				<Popover.Content>Place content for the popover here.</Popover.Content>
			</Popover.Root>
		</nav>
		<!--DesktopNavigation-->
		<nav class="hidden sm:block">
			<ul class="flex rounded-full px-3 font-medium shadow-md shadow-border ring-1 ring-border">
				<li><a href="/" class="block px-3 py-2">About</a></li>
				<li><a href="/" class="block px-3 py-2">Projects</a></li>
			</ul>
		</nav>
		<div class="flex flex-1 justify-end">
			<ThemeSwitcher />
		</div>
	</header>
	<main class="mx-auto w-full px-4 sm:px-8 md:px-12">
		{@render children()}
	</main>
</div>
