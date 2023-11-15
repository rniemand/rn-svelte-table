<script lang="ts">
	export let tab: string;
	$: open = tab === 'RnSvelteTableConfig';
</script>

<div class="accordion-item">
	<h2 class="accordion-header">
		<button class="accordion-button" on:click class:collapsed={!open} type="button"> RnSvelteTableConfig(...) </button>
	</h2>
	<div id="collapseOne" class="accordion-collapse collapse" class:show={open}>
		<div class="accordion-body">
			<p>holder</p>
		</div>
	</div>
</div>
