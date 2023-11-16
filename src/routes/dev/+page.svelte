<script lang="ts">
	import RnSvelteTable from "$lib/components/RnSvelteTable.svelte";
	import { RnSvelteTableConfigBuilder } from "$lib/index.js";

	const builder = new RnSvelteTableConfigBuilder({
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
