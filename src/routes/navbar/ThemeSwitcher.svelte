<script lang="ts">
	import Sun from 'svelte-radix/Sun.svelte';
	import Moon from 'svelte-radix/Moon.svelte';

	import { setMode, resetMode } from 'mode-watcher';
	import { Button } from '$lib/shadcn/ui/button';
	// noinspection ES6UnusedImports
	import * as DropdownMenu from '$lib/shadcn/ui/dropdown-menu';
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger asChild let:builder>
		<Button
			aria-label="Switch light/dark theme"
			class="group rounded-full bg-secondary/80 px-3 py-2 shadow-lg shadow-foreground/5 ring-1 ring-border/5 backdrop-blur transition hover:bg-secondary/20 hover:ring-foreground/50"
			builders={[builder]}
			variant="outline"
			size="icon_lg"
		>
			<Sun
				class="absolute h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
			/>
			<Moon
				class="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
			/>
			<span class="sr-only">Toggle theme</span>
		</Button>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content align="end">
		<DropdownMenu.Item on:click={() => setMode('light')}>Light</DropdownMenu.Item>
		<DropdownMenu.Item on:click={() => setMode('dark')}>Dark</DropdownMenu.Item>
		<DropdownMenu.Item on:click={() => resetMode()}>System</DropdownMenu.Item>
	</DropdownMenu.Content>
</DropdownMenu.Root>
