<script lang="ts">
	import '../app.css';

	import { ModeWatcher } from 'mode-watcher';
	import HamburgerMenu from 'svelte-radix/HamburgerMenu.svelte';

	// noinspection ES6UnusedImports
	import * as Popover from '$lib/shadcn/ui/popover';
	import { buttonVariants } from '$lib/shadcn/ui/button';
	import { cn } from '$lib/utils';
	import ThemeSwitcher from './navbar/ThemeSwitcher.svelte';

	import PageTransition from './transition.svelte';

	export let data;

	const { variant, size } = buttonVariants.variants;
</script>

<ModeWatcher />
<div class="relative mx-auto flex min-h-full w-full max-w-7xl flex-col px-4 sm:px-8 md:px-12">
	<!-- Background -->
	<div class="absolute inset-0 -z-50 mx-auto flex w-full justify-center px-4 sm:px-8 md:px-12">
		<div class="w-full bg-background ring-1 ring-border"></div>
	</div>
	<header
		class="sticky top-0 z-50 w-full flex-none bg-gradient-to-b from-background from-65% via-background/30 via-90% px-4 pb-12 pt-6 sm:px-8 md:px-12 md:pb-16"
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
							href="/posts"
							class="block px-3 py-2 transition duration-200 hover:text-primary focus-visible:text-primary"
							>Posts</a
						>
					</li>
				</ul>
			</nav>
			<div class="flex flex-1 justify-end">
				<ThemeSwitcher />
			</div>
		</div>
	</header>
	<main class="mx-auto flex w-full flex-1 flex-col px-4 sm:px-8 md:px-12">
		<PageTransition url={data.url}>
			<slot />
		</PageTransition>
	</main>
	<footer class="group mt-32 flex-none">
		<div class="border-t border-border px-4 pb-16 pt-10 sm:px-8 lg:px-12">
			<div class="mx-auto max-w-2xl lg:max-w-5xl">
				<div class="flex items-center justify-end gap-6">
					<p class="font-normal text-secondary-foreground group-hover:text-foreground">
						Thanks for visiting, have a wonderful day
						<span class="sr-only">,with love</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							class="inline h-5 w-5 animate-bounce fill-secondary-foreground align-bottom transition duration-300 group-hover:scale-125 group-hover:fill-primary"
						>
							<path
								d="m9.653 16.915-.005-.003-.019-.01a20.759 20.759 0 0 1-1.162-.682 22.045 22.045 0 0 1-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 0 1 8-2.828A4.5 4.5 0 0 1 18 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 0 1-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 0 1-.69.001l-.002-.001Z"
							/>
						</svg>
					</p>
				</div>
			</div>
		</div>
	</footer>
</div>
