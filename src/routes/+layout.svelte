<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import ThemeSwitcher from './navbar/ThemeSwitcher.svelte';
	// noinspection ES6UnusedImports
	import * as Popover from '$lib/shadcn/ui/popover';
	import { buttonVariants } from '$lib/shadcn/ui/button';
	import HamburgerMenu from 'svelte-radix/HamburgerMenu.svelte';
	import { cn } from '$lib/utils';

	const { variant, size } = buttonVariants.variants;
</script>

<ModeWatcher />
<div class="relative mx-auto min-h-full w-full max-w-7xl flex-col px-4 sm:px-8 md:px-12">
	<!-- Background -->
	<div class="absolute inset-0 -z-50 mx-auto flex w-full justify-center px-4 sm:px-8 md:px-12">
		<div class="w-full bg-background ring-1 ring-border"></div>
	</div>
	<header
		class="sticky top-0 z-50 w-full bg-gradient-to-b from-background from-65% via-background/30 via-90% px-4 pb-12 pt-6 sm:px-8 md:px-12 md:pb-16"
	>
		<div class="mx-auto flex max-w-screen-lg items-center justify-end gap-4 sm:justify-center">
			<div class="flex flex-1">Home</div>
			<!--MobileNavigation-->
			<nav class="sm:hidden">
				<Popover.Root>
					<Popover.Trigger>
						<div class={cn(variant.icon, size.icon_lg, 'group flex items-center justify-center')}>
							<HamburgerMenu class="h-5 w-5 group-hover:fill-primary" />
						</div>
					</Popover.Trigger>
					<Popover.Content>Place content for the popover here.</Popover.Content>
				</Popover.Root>
			</nav>
			<!--DesktopNavigation-->
			<nav class="hidden sm:block">
				<ul class="flex rounded-full px-3 font-medium shadow-md shadow-border ring-1 ring-border">
					<li>
						<a
							href="/"
							class="block px-3 py-2 transition duration-200 hover:text-primary focus-visible:text-primary"
							>About</a
						>
					</li>
					<li>
						<a
							href="/"
							class="block px-3 py-2 transition duration-200 hover:text-primary focus-visible:text-primary"
							>Projects</a
						>
					</li>
				</ul>
			</nav>
			<div class="flex flex-1 justify-end">
				<ThemeSwitcher />
			</div>
		</div>
	</header>
	<main class="mx-auto w-full px-4 sm:px-8 md:px-12">
		<slot />
	</main>
</div>
