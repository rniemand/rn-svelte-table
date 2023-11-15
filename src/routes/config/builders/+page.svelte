<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import ConfigNavigation from '../ConfigNavigation.svelte';
	import RnSvelteTableConfigBuilderDocs from './RnSvelteTableConfigBuilderDocs.svelte';
	import AnotherOne from './AnotherOne.svelte';

	let tab: string = 'RnSvelteTableConfigBuilder';
	const setTab = (tab: string) => goto(`/config/builders?tab=${tab}`);

	$: tab = $page.url.searchParams.get('tab') || 'RnSvelteTableConfigBuilder';
</script>

<ConfigNavigation />

<div class="accordion" id="accordionExample">
	<RnSvelteTableConfigBuilderDocs {tab} on:click={() => setTab('RnSvelteTableConfigBuilder')} />
	<AnotherOne {tab} on:click={() => setTab('AnotherOne')} />
</div>
