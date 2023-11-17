<script lang="ts">
	import { TableDefaultConfig } from '$lib/config/TableDefaultConfig';
	import type { TableConfig, TableHeader, TableHeaderCell } from '$lib/types/_types';
	import RnButton from './core/RnButton.svelte';
	import RnDropdownMenu from './core/RnDropdownMenu.svelte';
	import RnTextInput from './core/RnTextInput.svelte';

	export let config: TableConfig;
	export let header: TableHeader;
	export let toggleColumn: (_col: TableHeaderCell) => void;

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
		<RnButton {config} color="danger" className={config.enableColumnFilter ? 'padEnd' : ''}>Clear</RnButton>
	{/if}
	{#if config.enableColumnFilter}
		<RnDropdownMenu {config}>
			<h1>Head</h1>
			<div class="columns">
				{#each header.columns as col}
					<a class="column" href="#!" on:click={() => toggleColumn(col)}>
						<input type="checkbox" checked={col.visible} />
						{col.content}
					</a>
				{/each}
			</div>
		</RnDropdownMenu>
	{/if}
</div>

<style>
	.rn-tbl-controls {
		margin-bottom: 0.5rem;
	}

	.rn-tbl-controls :global(.padEnd) {
		margin-right: 0.5rem;
	}

	a.column {
		display: block;
		text-decoration: none;
		color: inherit;
	}

	.columns {
		max-height: 200px;
		overflow-y: auto;
	}
</style>
