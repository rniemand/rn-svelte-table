<script lang="ts">
	import { page } from '$app/stores';
	import { TypesUrls } from '../DocUrls.js';
	$: url = $page.route.id || '/types';
</script>

<h3 class="text-center">RnSvelteTable - Types</h3>

<ul class="nav nav-tabs justify-content-center">
	<li class="nav-item">
		<a class="nav-link" class:active={url === TypesUrls.Root} href={TypesUrls.Root}>Overview</a>
	</li>
	<li class="nav-item">
		<a class="nav-link" class:active={url === TypesUrls.Core} href={TypesUrls.Core}>Core</a>
	</li>
</ul>
