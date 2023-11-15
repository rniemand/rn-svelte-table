<script lang="ts">
	import { page } from '$app/stores';
	import { ConfigUrls } from '../DocUrls.js';
	$: url = $page.route.id || ConfigUrls.Root;
</script>

<ul class="nav nav-tabs justify-content-center">
	<li class="nav-item">
		<a class="nav-link" class:active={url === ConfigUrls.Root} href={ConfigUrls.Root}>Overview</a>
	</li>
	<li class="nav-item">
		<a class="nav-link" class:active={url === ConfigUrls.Styling} href={ConfigUrls.Styling}>Styling</a>
	</li>
	<li class="nav-item">
		<a class="nav-link" class:active={url === ConfigUrls.Builders} href={ConfigUrls.Builders}>Builders</a>
	</li>
</ul>
