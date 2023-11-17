<script lang="ts">
	import type { TableHeader } from '$lib/types/_types.js';
	export let header: TableHeader;
</script>

<thead>
	<tr>
		{#each header.columns as column}
			{#if column.visible}
				<th class={column.class || ''}>
					{#if column.noBreak}<nobr>{column.content}</nobr>{:else}{column.content}{/if}
				</th>
			{/if}
		{/each}
	</tr>
</thead>
