<script lang="ts">
	import type { TableConfigBuilder, TableDataBuilder, TableHeaderBuilder } from '$lib/builders/_builders.js';
	import { TableDefaultConfig } from '$lib/config/_config.js';
	import type { TableConfig, TableDataStore, TableHeader, TableRow } from '$lib/types/_types.js';
	import { compileTableConfig, compileTableHeader, generateTableClass } from '$lib/utils/_utils.js';
	import { onMount } from 'svelte';
	import RnTableBody from './RnTableBody.svelte';
	import RnTableHeader from './RnTableHeader.svelte';

	export let config: TableConfig | TableConfigBuilder | undefined | null = TableDefaultConfig;
	export let header: TableHeader | TableHeaderBuilder;
	export let dataStore: TableDataStore;
	let storeRows: TableRow[] = [];

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

<div class:table-responsive={builtConfig.responsive === true} class={typeof builtConfig.responsive === 'string' ? builtConfig.responsive : ''}>
	<table class={tableClass}>
		<RnTableHeader header={builtHeader} />
		<RnTableBody rows={storeRows} />
	</table>
</div>
