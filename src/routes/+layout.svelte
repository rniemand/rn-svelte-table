<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css';
	import DevNavigationBar from '../components/DevNavigationBar.svelte';
</script>

<DevNavigationBar />
<div class="col mx-auto p-3">
	<main>
		<slot />
	</main>
</div>
<footer class="pt-5 my-5 text-body-secondary border-top">
	Created by the <a href="https://github.com/rniemand/rn-svelte-table" target="_blank"
		>Richard Niemand</a
	>
	&middot; {new Date().getFullYear()}
</footer>
