<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import TypesNavigation from '../TypesNavigation.svelte';
	import RnSvelteTableConfigDocs from './RnSvelteTableConfigDocs.svelte';
	import { TypesUrls } from '../../DocUrls.js';
	let tab: string = 'RnSvelteTableConfigBuilder';
	const setTab = (tab: string) => goto(TypesUrls.CoreTab(tab));
	$: tab = $page.url.searchParams.get('tab') || 'RnSvelteTableConfig';
</script>

<TypesNavigation />

<div class="accordion">
	<RnSvelteTableConfigDocs {tab} {setTab} />
</div>
