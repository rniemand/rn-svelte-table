<script lang="ts">
	import RnSvelteTable from "$lib/components/RnSvelteTable.svelte";
	import { TableConfigBuilder, TableHeaderBuilder } from "$lib/index.js";

	console.clear();

	const builder = new TableConfigBuilder({
		striped: true,
		hover: true,
		bordered: true,
		dark: false,
		small: false,
		responsive: true
	});

	const headerBuilder = new TableHeaderBuilder()
		.addColumn(builder => builder
			.withContent('Column 1'))
		.addColumn(builder => builder
			.withContent('Column 2')
			.withClass(['text-center', () => 'font-small']))
		.addColumn(builder => builder
			.withContent('Column 3')
			.withClass('text-center'))
		.addColumn(builder => builder
			.withContent('Column 4')
			.withClass(() => 'text-center'))
		.addColumn(builder => builder
			.withContent('Column 5'))
		.build();
	
	 console.log('headerBuilder', JSON.stringify(headerBuilder, null, 2));
</script>

<h2 class="text-center mb-3">Development</h2>

<RnSvelteTable config={builder} header={headerBuilder} />
