<script lang="ts">
	import DocAccordianItem from '../../../components/DocAccordianItem.svelte';
	export let tab: string;
	export let setTab: (tab: string) => void;
</script>

<DocAccordianItem {setTab} {tab} tabName="RnSvelteTableConfig">
	<div>this is a holder</div>
</DocAccordianItem>
