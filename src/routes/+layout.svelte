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
<footer class="pt-2 my-5 text-body-secondary border-top text-center">
	Created by the <a href="https://github.com/rniemand/rn-svelte-table" target="_blank">Richard Niemand</a>
	&middot; {new Date().getFullYear()}
</footer>
