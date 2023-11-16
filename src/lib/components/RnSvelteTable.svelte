<script lang="ts">
	import type { TableConfigBuilder, TableHeaderBuilder } from "$lib/builders/_builders.js";
	import { TableDefaultConfig } from "$lib/config/_config.js";
	import type { TableConfig, TableHeader } from "$lib/types/_types.js";
	import { compileTableConfig, compileTableHeader, generateTableClass } from "$lib/utils/_utils.js";
	import RnTableHeader from './RnTableHeader.svelte';

	export let config: TableConfig | TableConfigBuilder | undefined | null = TableDefaultConfig;
	export let header: TableHeader | TableHeaderBuilder;

	$: builtConfig = compileTableConfig(config);
	$: builtHeader = compileTableHeader(header);
	$: tableClass = generateTableClass(builtConfig);
</script>

<div class:table-responsive={builtConfig.responsive === true} class={typeof builtConfig.responsive === 'string' ? builtConfig.responsive : ''}>
	<table class={tableClass}>
		<RnTableHeader header={builtHeader} />
	</table>
</div>
