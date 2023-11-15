<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import ConfigNavigation from '../ConfigNavigation.svelte';
	import RnSvelteTableConfigBuilderDocs from './RnSvelteTableConfigBuilderDocs.svelte';
	import { ConfigUrls } from '../../DocUrls.js';

	let tab: string = 'RnSvelteTableConfigBuilder';
	const setTab = (tab: string) => goto(ConfigUrls.BuildersTab(tab));
	$: tab = $page.url.searchParams.get('tab') || 'RnSvelteTableConfigBuilder';
</script>

<ConfigNavigation />

<div class="accordion">
	<RnSvelteTableConfigBuilderDocs {tab} {setTab} />
</div>
