<script lang="ts">
	import RnSvelteTable from "$lib/components/RnSvelteTable.svelte";
	import { TableConfigBuilder } from "$lib/index.js";

	const builder = new TableConfigBuilder({
		striped: true,
		hover: true,
		bordered: true,
		dark: false,
		small: false,
		responsive: true
	});
</script>

<h2 class="text-center mb-3">Development</h2>

<RnSvelteTable config={builder} />
