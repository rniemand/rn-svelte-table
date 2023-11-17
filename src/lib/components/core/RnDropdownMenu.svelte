<script lang="ts">
	import type { TableConfig } from '$lib/types/TableConfig';
	import { compileClassList } from '$lib/utils/core-utils';
	import RnButton from './RnButton.svelte';

	export let config: TableConfig;
	let shown: boolean = false;

	const generateDropdownClassList = (_config: TableConfig) => {
		const generated: string[] = ['rn-tbl-dropdown'];
		generated.push(_config.dropdownWrappingClass || '');
		generated.push(_config.dark === true ? 'dark' : _config.dark || '');
		return compileClassList(generated);
	};

	$: ddClassList = generateDropdownClassList(config);
</script>

<div class={ddClassList}>
	<RnButton {config} color="info" on:click={() => (shown = !shown)}>Options</RnButton>
	<div class="rn-dd-content {config.dropdownContentClass}" class:show={shown}>
		{#if shown}<slot />{/if}
	</div>
</div>

<style>
	.rn-tbl-dropdown {
		position: relative;
		display: inline-block;
	}

	.rn-tbl-dropdown .rn-dd-content {
		display: none;
		position: absolute;
		background-color: #fff;
		min-width: 250px;
		box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
		z-index: 1;
		right: 0;
		padding: 0.2rem;
		margin-top: 0.2rem;
		border-radius: 0.3rem;
		border: 1px solid #4c4b4b;
	}

	.rn-tbl-dropdown.dark .rn-dd-content {
		background-color: #0c151d;
		color: #fff;
	}

	.rn-tbl-dropdown .rn-dd-content.show {
		display: block;
	}

	.rn-tbl-dropdown .rn-dd-content :global(h1) {
		font-size: 1.3rem;
		margin-top: 0.2rem;
	}
</style>
