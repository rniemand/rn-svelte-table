<script lang="ts">
	import { page } from '$app/stores';
	$: url = $page.route.id || '/types';
</script>

<h3 class="text-center">RnSvelteTable - Types</h3>

<ul class="nav nav-tabs justify-content-center">
	<li class="nav-item">
		<a class="nav-link" class:active={url === '/types'} href="/types">Overview</a>
	</li>
	<li class="nav-item">
		<a class="nav-link" class:active={url === '/types/core'} href="/types/core">Core</a>
	</li>
</ul>
