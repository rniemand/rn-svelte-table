<script lang="ts">
	import { TableDefaultConfig } from '$lib/config/TableDefaultConfig';
	import type { TableConfig, TableHeader, TableHeaderCell } from '$lib/types/_types';
	import { compileClassList, numArraysEqual } from '$lib/utils/core-utils';
	import RnButton from './core/RnButton.svelte';
	import RnDropdownMenu from './core/RnDropdownMenu.svelte';
	import RnTextInput from './core/RnTextInput.svelte';

	export let config: TableConfig;
	export let header: TableHeader;
	export let toggleColumn: (_col: TableHeaderCell) => void;
	export let resetColumns: () => void;
	export let moveColumnDown: (_col: TableHeaderCell) => void;
	export let searchTerm: string = '';
	let originalColumnIdxs: number[] = [];
	let columnsChanged: boolean = false;

	const generateClassList = (_config: TableConfig) => {
		const generated: string[] = ['rn-tbl-controls'];
		generated.push(config.tableControlsClass || TableDefaultConfig.tableControlsClass || 'table-controls');
		generated.push(config.dark ? 'dark' : '');
		return compileClassList(generated);
	};

	const extractOriginalColumnIdxs = (_head: TableHeader) => {
		return _head.columns.reduce((pv: number[], cv) => {
			if (cv.defaultVisible) pv.push(cv.columnIndex);
			return pv;
		}, []);
	};

	const getColumnsChanged = (_head: TableHeader) => {
		const visibleColumnIdxs = _head.columns.reduce((pv: number[], cv) => {
			if (cv.visible) pv.push(cv.columnIndex);
			return pv;
		}, []);
		return !numArraysEqual(originalColumnIdxs, visibleColumnIdxs);
	};

	const moveColumnUp = (_col: TableHeaderCell) => {
		console.log('moveColumnUp()', _col);
	};

	$: originalColumnIdxs = extractOriginalColumnIdxs(header);
	$: columnsChanged = getColumnsChanged(header);
	$: controlClassList = generateClassList(config);
	$: columnOrder = header.columnOrder;
</script>

<div class={controlClassList}>
	{#if config.enableSearch}
		<RnTextInput {config} className="padEnd" bind:value={searchTerm} />
		<RnButton {config} color="danger" className={config.enableColumnFilter ? 'padEnd' : ''} disabled={searchTerm.length == 0} on:click={() => (searchTerm = '')}>Clear</RnButton>
	{/if}
	{#if config.enableColumnFilter}
		<RnDropdownMenu {config}>
			<h1 class="header">Table Columns</h1>
			<div class="columns">
				{#each columnOrder as colIdx}
					<div class="colum-info">
						<a class="column" href="#!" on:click={() => toggleColumn(header.columns[colIdx])}>
							<input type="checkbox" checked={header.columns[colIdx].visible} />
							{header.columns[colIdx].content}
						</a>
						<a class="move" href="#!" class:disabled={header.columns[colIdx].firstColumn} on:click={() => moveColumnUp(header.columns[colIdx])}>↑</a>
						<a class="move" href="#!" class:disabled={header.columns[colIdx].lastColumn} on:click={() => moveColumnDown(header.columns[colIdx])}>↓</a>
					</div>
				{/each}
			</div>
			<div>
				<RnButton {config} color="warning" fullWidth disabled={!columnsChanged} on:click={resetColumns}>Reset Columns</RnButton>
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
		padding-left: 0.3rem;
	}
	a.column:hover {
		background-color: rgba(0, 0, 0, 0.2);
	}

	.rn-tbl-controls .columns {
		max-height: 200px;
		overflow-y: auto;
		border: 1px solid #cfcfcf;
		border-radius: 0.3rem;
		margin-bottom: 0.5rem;
		margin-top: 0.5rem;
	}
	.rn-tbl-controls.dark .columns {
		border: 1px solid #404040;
	}

	.header {
		text-align: center;
	}

	.colum-info {
		display: flex;
	}
	.colum-info a:not(.move) {
		flex: auto;
	}
	.colum-info a.move {
		text-decoration: none;
		color: inherit;
	}

	.colum-info .move {
		width: 1rem;
		border: 1px solid;
		text-align: center;
		padding: 0;
		margin-left: 0.1rem;
		border-radius: 0.2rem;
		background-color: #4040404b;
		cursor: pointer;
		border-color: rgba(0, 0, 0, 0.123);
	}
	.colum-info .move:hover {
		background-color: #4040407c;
	}
	.colum-info .move.disabled {
		display: none;
	}
</style>
