<script lang="ts">
	import type { TableConfigBuilder } from "$lib/builders/_builders.js";
	import { TableDefaultConfig } from "$lib/config/_config.js";
	import type { TableConfig } from "$lib/types/_types.js";
	import { compileTableConfig, generateTableClass } from "$lib/utils/_utils.js";

	export let config: TableConfig | TableConfigBuilder | undefined | null = TableDefaultConfig;

	$: builtConfig = compileTableConfig(config);
	$: tableClass = generateTableClass(builtConfig);
</script>

<div class:table-responsive={builtConfig.responsive === true} class={typeof builtConfig.responsive === 'string' ? builtConfig.responsive : ''}>
	<table class={tableClass}>
		<thead>
			<tr>
				<th>Column 1</th>
				<th>Column 2</th>
				<th>Column 3</th>
				<th>Column 4</th>
			</tr>
		</thead>
	</table>
</div>
