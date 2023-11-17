<script lang="ts">
	import { TableDefaultConfig } from '$lib/config/TableDefaultConfig';
	import type { TableConfig, TableHeader } from '$lib/types/_types';
	import RnButton from './core/RnButton.svelte';
	import RnTextInput from './core/RnTextInput.svelte';

	export let config: TableConfig;
	export let header: TableHeader;

	const generateClassList = (_config: TableConfig) => {
		const generated: string[] = ['rn-tbl-controls'];
		generated.push(config.tableControlsClass || TableDefaultConfig.tableControlsClass || 'table-controls');
		return generated.join(' ');
	};

	$: controlClassList = generateClassList(config);
</script>

<div class={controlClassList}>
	{#if config.enableSearch}
		<RnTextInput {config} className="padEnd" />
		<RnButton {config} className={config.enableColumnFilter ? 'padEnd' : ''}>Clear</RnButton>
	{/if}
	{#if config.enableColumnFilter}
		<span>column filter</span>
	{/if}
</div>

<style>
	.rn-tbl-controls :global(.padEnd) {
		margin-right: 0.5rem;
	}
</style>
