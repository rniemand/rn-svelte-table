<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import TypesNavigation from '../TypesNavigation.svelte';
	import RnSvelteTableConfigDocs from './RnSvelteTableConfigDocs.svelte';

	let tab: string = 'RnSvelteTableConfigBuilder';
	const setTab = (tab: string) => goto(`/types/core?tab=${tab}`);
	$: tab = $page.url.searchParams.get('tab') || 'RnSvelteTableConfig';
</script>

<TypesNavigation />

<div class="accordion">
	<RnSvelteTableConfigDocs {tab} on:click={() => setTab('RnSvelteTableConfig')} />
</div>
