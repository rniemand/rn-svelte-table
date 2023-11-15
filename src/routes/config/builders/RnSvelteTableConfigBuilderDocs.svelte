<script lang="ts">
	export let tab: string;
	$: open = tab === 'RnSvelteTableConfigBuilder';
</script>

<div class="accordion-item">
	<h2 class="accordion-header">
		<button class="accordion-button" on:click class:collapsed={!open} type="button"> RnSvelteTableConfigBuilder(...) </button>
	</h2>
	<div id="collapseOne" class="accordion-collapse collapse" class:show={open}>
		<div class="accordion-body">more to come</div>
	</div>
</div>
