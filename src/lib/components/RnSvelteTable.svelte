<script lang="ts">
	import type { TableConfigBuilder, TableHeaderBuilder } from '$lib/builders/_builders.js';
	import type { TableConfig, TableDataStore, TableHeader, TableHeaderCell, TableRow } from '$lib/types/_types.js';
	import { compileTableConfig, compileTableHeader, generateTableClass } from '$lib/utils/_utils.js';
	import { onMount } from 'svelte';
	import RnTableBody from './RnTableBody.svelte';
	import RnTableHeader from './RnTableHeader.svelte';
	import RnTableControls from './RnTableControls.svelte';

	export let config: TableConfig | TableConfigBuilder;
	export let header: TableHeader | TableHeaderBuilder;
	export let dataStore: TableDataStore;
	let storeRows: TableRow[] = [];

	const toggleColumn = (col: TableHeaderCell) => {
		col.visible = !col.visible;
		header = header;
	};

	onMount(() => {
		const rowsSub = dataStore?.subscribe((_rows: TableRow[]) => {
			storeRows = _rows;
		});

		return () => {
			rowsSub?.();
		};
	});

	$: builtConfig = compileTableConfig(config);
	$: builtHeader = compileTableHeader(header);
	$: tableClass = generateTableClass(builtConfig);
</script>

{#if builtConfig.tableControls}
	<RnTableControls config={builtConfig} header={builtHeader} {toggleColumn} />
{/if}
<div class:table-responsive={builtConfig.responsive === true} class={typeof builtConfig.responsive === 'string' ? builtConfig.responsive : ''}>
	<table class={tableClass}>
		<RnTableHeader header={builtHeader} />
		<RnTableBody header={builtHeader} rows={storeRows} />
	</table>
</div>
