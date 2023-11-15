<script lang="ts">
	import DocAccordianItem from '../../../components/DocAccordianItem.svelte';
	export let tab: string;
	export let setTab: (tab: string) => void;
</script>

<DocAccordianItem {setTab} {tab} tabName="RnSvelteTableConfigBuilder">
	<p>Simple builder used to generate table configuration, this builder generates instances of the</p>
</DocAccordianItem>
