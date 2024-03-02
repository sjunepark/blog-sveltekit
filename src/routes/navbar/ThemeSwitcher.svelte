<script lang="ts">
	import Sun from 'svelte-radix/Sun.svelte';
	import Moon from 'svelte-radix/Moon.svelte';

	import { setMode, resetMode, mode } from 'mode-watcher';
	import { Button } from '$lib/shadcn/ui/button';
	// noinspection ES6UnusedImports
	import * as DropdownMenu from '$lib/shadcn/ui/dropdown-menu';

	let hovered = false;
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger asChild let:builder>
		<Button
			aria-label="Switch light/dark theme"
			builders={[builder]}
			class="group"
			onmouseleave={() => {
				hovered = false;
			}}
			onmouseover={() => {
				hovered = true;
			}}
			size="icon_lg"
			variant="icon"
		>
			<!--eslint-disable-next-line-->
			{#if !hovered && $mode === 'light'}
				<Sun
					class="h-5 w-5 rotate-0 scale-100 transition-all group-hover:fill-primary dark:-rotate-90 dark:scale-0"
				/>
			{:else}
				<Moon
					class="h-5 w-5 rotate-90 scale-0 transition-all group-hover:fill-primary dark:rotate-0 dark:scale-100"
				/>
			{/if}
			<span class="sr-only">Toggle theme</span>
		</Button>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content align="end">
		<DropdownMenu.Item on:click={() => setMode('light')}>Light</DropdownMenu.Item>
		<DropdownMenu.Item on:click={() => setMode('dark')}>Dark</DropdownMenu.Item>
		<DropdownMenu.Item on:click={() => resetMode()}>System</DropdownMenu.Item>
	</DropdownMenu.Content>
</DropdownMenu.Root>
