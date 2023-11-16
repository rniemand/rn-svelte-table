<script lang="ts">
	import type { TableHeader } from "$lib/types/_types.js";
	export let header: TableHeader;
</script>

<thead>
	<tr>
		{#each header.columns as column}
			<th class={column.class || ''}>
				{column.content}
			</th>
		{/each}
	</tr>
</thead>