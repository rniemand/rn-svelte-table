<script lang="ts">
	import type { TableConfigBuilder } from '$lib/builders/_builders.js';
	import type { TableConfig, TableHeader, TableHeaderCell } from '$lib/types/_types.js';
	import { HeaderUtils, compileTableConfig, generateTableClass } from '$lib/utils/_utils.js';
	import { onMount } from 'svelte';
	import RnTableBody from './RnTableBody.svelte';
	import RnTableHeader from './RnTableHeader.svelte';
	import RnTableControls from './RnTableControls.svelte';
	import type { TableDataStore, TableRow } from '$lib/modals/_modals';

	export let config: TableConfig | TableConfigBuilder;
	export let dataStore: TableDataStore;
	let storeRows: TableRow[] = [];
	let storeHeader: TableHeader;
	let searchTerm: string = '';

	const toggleColumn = (col: TableHeaderCell) => {
		col.visible = !col.visible;
		storeHeader = storeHeader;
	};

	const filterTableData = (term: string, rows: TableRow[]) => {
		if (!term || term == '') return rows.slice();
		const safeTerm = term.toLowerCase().trim();
		return rows.filter((x) => x.searchString.indexOf(safeTerm) !== -1);
	};

	const resetColumns = () => {
		for (const col of storeHeader.columns) {
			col.visible = col.defaultVisible;
		}
		storeHeader = storeHeader;
	};

	const moveColumnDown = (col: TableHeaderCell) => {
		const orderIdx = storeHeader.columnOrder.indexOf(col.columnIndex || 0);
		const swappedWithOrder = storeHeader.columns[storeHeader.columnOrder[orderIdx + 1]].columnOrder;
		storeHeader.columns[storeHeader.columnOrder[orderIdx + 1]].columnOrder = col.columnOrder;
		col.columnOrder = swappedWithOrder;
		HeaderUtils.setColumnOrder(storeHeader);
		storeHeader = storeHeader;
	};

	onMount(() => {
		const rowsSub = dataStore?.subscribeData((_rows: TableRow[]) => {
			storeRows = _rows;
		});

		const headSub = dataStore?.subscribeHeader((_header: TableHeader) => {
			storeHeader = _header;
		});

		return () => {
			rowsSub?.();
			headSub?.();
		};
	});

	$: builtConfig = compileTableConfig(config);
	// $: builtHeader = compileTableHeader(header);
	$: tableClass = generateTableClass(builtConfig);
	$: displayRows = filterTableData(searchTerm, storeRows);
</script>

{#if storeHeader}
	{#if builtConfig.tableControls}
		<RnTableControls config={builtConfig} header={storeHeader} {toggleColumn} bind:searchTerm {resetColumns} {moveColumnDown} />
	{/if}
	<div class:table-responsive={builtConfig.responsive === true} class={typeof builtConfig.responsive === 'string' ? builtConfig.responsive : ''}>
		<table class={tableClass}>
			<RnTableHeader header={storeHeader} />
			<RnTableBody header={storeHeader} rows={displayRows} />
		</table>
	</div>
{/if}
