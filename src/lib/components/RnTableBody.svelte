<script lang="ts">
	import type { TableRow, TableRowCell } from '$lib/modals/_modals';
	import type { TableHeader } from '$lib/types/_types';
	export let rows: TableRow[];
	export let header: TableHeader;

	const isVisible = (cell: TableRowCell) => {
		return header.columns[cell.columnIndex].visible;
	};

	const trackHeaderChanges = (_head: TableHeader) => {
		// HACK: for now until I find a better way to handle this
		rows = rows;
	};

	$: trackHeaderChanges(header);
</script>

{#if rows.length > 0}
	<tbody>
		{#each rows as row}
			<tr class={row.class}>
				{#each header.columnOrder as colIdx}
					{#if isVisible(row.columns[colIdx])}
						<td class={row.columns[colIdx].class}>
							{row.columns[colIdx].content}
						</td>
					{/if}
				{/each}
			</tr>
		{/each}
	</tbody>
{/if}
