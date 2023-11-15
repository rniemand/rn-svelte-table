<script lang="ts">
	import { page } from '$app/stores';
	$: url = $page.route.id || '/config';
</script>

<ul class="nav nav-tabs justify-content-center">
	<li class="nav-item">
		<a class="nav-link" class:active={url === '/config'} href="/config">Overview</a>
	</li>
	<li class="nav-item">
		<a class="nav-link" class:active={url === '/config/styling'} href="/config/styling">Styling</a>
	</li>
</ul>
