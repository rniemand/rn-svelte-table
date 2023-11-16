<script lang="ts">
	import type { TableRow } from '$lib/types/_types';
	export let rows: TableRow[];
</script>

<tbody>
	{#each rows as row}
		<tr class={row.class}>
			{#each row.columns as col}
				<td class={col.class}>
					{col.content}
				</td>
			{/each}
		</tr>
	{/each}
</tbody>
