<script lang="ts">
	import RnSvelteTable from '$lib/components/RnSvelteTable.svelte';
	import { TableConfigBuilder, TableDataBuilder, TableDataStore, TableHeaderBuilder } from '$lib/index.js';

	const config = new TableConfigBuilder().striped().hover().dark().bordered().responsive().tableControls().tableControlsClass('d-flex').dropdownWrappingClass('custom-wrapper');

	const columns = [...'abcdefghijklmnopqrstuvwxyz'.split('')];
	const header = new TableHeaderBuilder();
	const dataBuilder = new TableDataBuilder();

	for (const key of columns) {
		header.addColumn((col) =>
			col
				.withContent(`Column ${key.toUpperCase()}`)
				.withNoBreak()
				.visible(Math.random() * 10 > 5)
		);
	}

	for (let i = 0; i < 10; i++) {
		dataBuilder.addRow((builder) => {
			for (const key of columns) {
				builder.addColumn((col) => col.withContent(`Row ${i + 1} - column ${key}`));
			}
			return builder;
		});
	}

	const dataStore = new TableDataStore().set(dataBuilder);
</script>

<h2 class="text-center mb-3">Development</h2>

<RnSvelteTable {config} {header} {dataStore} />
