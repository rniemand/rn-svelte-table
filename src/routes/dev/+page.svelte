<script lang="ts">
	import RnSvelteTable from '$lib/components/RnSvelteTable.svelte';
	import { TableConfigBuilder, TableDataBuilder, TableDataStore, TableHeaderBuilder, TableRowBuilder } from '$lib/index.js';

	console.clear();

	const config = new TableConfigBuilder({
		striped: true,
		hover: true,
		bordered: true,
		dark: false,
		small: false,
		responsive: true
	});

	const header = new TableHeaderBuilder()
		.addColumn((builder) => builder.withContent('Column 1'))
		.addColumn((builder) => builder.withContent('Column 2').withClass('text-center'))
		.addColumn((builder) => builder.withContent('Column 3'));

	let dataBuilder = new TableDataBuilder()
		.addRow((row) =>
			row
				.withClass('text-center')
				.addColumn((col) => col.withContent('row 1 - col 1'))
				.addColumn((col) => col.withContent('row 1 - col 2'))
				.addColumn((col) => col.withContent('row 1 - col 3'))
		)
		.addRow((row) =>
			row
				.withClass('text-start')
				.addColumn((col) => col.withContent('row 2 - col 1'))
				.addColumn((col) => col.withContent('row 2 - col 2'))
				.addColumn((col) => col.withContent('row 2 - col 3'))
		)
		.addRow((row) =>
			row
				.withClass('text-end')
				.addColumn((col) => col.withContent('row 3 - col 1'))
				.addColumn((col) => col.withContent('row 3 - col 2'))
				.addColumn((col) => col.withContent('row 3 - col 3'))
		);

	const dataStore = new TableDataStore().set(dataBuilder);
</script>

<h2 class="text-center mb-3">Development</h2>

<RnSvelteTable {config} {header} {dataStore} />
