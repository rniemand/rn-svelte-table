<script lang="ts">
	export let tab: string;
	export let setTab: (tab: string) => void;
	const tabName: string = 'AnotherOne';
	$: open = tab === tabName;
</script>

<div class="accordion-item">
	<h2 class="accordion-header">
		<button class="accordion-button" on:click={() => setTab(tabName)} class:collapsed={!open} type="button"> AnotherOne(...) </button>
	</h2>
	<div id="collapseOne" class="accordion-collapse collapse" class:show={open}>
		<div class="accordion-body">more to come</div>
	</div>
</div>
