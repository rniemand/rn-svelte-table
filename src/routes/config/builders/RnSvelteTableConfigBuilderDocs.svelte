<script lang="ts">
	export let tab: string;
	export let setTab: (tab: string) => void;
	const tabName: string = 'RnSvelteTableConfigBuilder';
	$: open = tab === tabName;
</script>

<div class="accordion-item">
	<h2 class="accordion-header">
		<button class="accordion-button" on:click={() => setTab(tabName)} class:collapsed={!open} type="button"> RnSvelteTableConfigBuilder(...) </button>
	</h2>
	<div id="collapseOne" class="accordion-collapse collapse" class:show={open}>
		<div class="accordion-body">
			<p>Simple builder used to generate table configuration, this builder generates instances of the</p>
		</div>
	</div>
</div>
