<script lang="ts">
	import type { TableHeader } from '$lib/types/_types.js';
	export let header: TableHeader;

	$: columnOrder = header.columnOrder;
</script>

<thead>
	<tr>
		{#each columnOrder as colIdx}
			{#if header.columns[colIdx].visible}
				<th class={header.columns[colIdx].class || ''}>
					{#if header.columns[colIdx].noBreak}<nobr>{header.columns[colIdx].content}</nobr>{:else}{header.columns[colIdx].content}{/if}
				</th>
			{/if}
		{/each}
	</tr>
</thead>
