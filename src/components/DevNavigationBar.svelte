<script lang="ts">
	import { page } from '$app/stores';
	import { ConfigUrls, CoreUrls, TypesUrls } from '../routes/DocUrls.js';
	$: currentRoute = $page.route.id || '';
</script>

<nav class="navbar navbar-expand bg-dark border-bottom border-body bg-body-tertiary">
	<div class="container-fluid">
		<a class="navbar-brand" href="/">RnSvelteTable</a>
		<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>

		<div class="collapse navbar-collapse" id="navbarsExample02">
			<ul class="navbar-nav me-auto">
				<li class="nav-item">
					<a class="nav-link" class:active={currentRoute === CoreUrls.Home} href={CoreUrls.Home}>Home</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" class:active={currentRoute === CoreUrls.Dev} href={CoreUrls.Dev}>Dev</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" class:active={currentRoute.startsWith(ConfigUrls.Root)} href={ConfigUrls.Root}>Config</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" class:active={currentRoute.startsWith(TypesUrls.Root)} href={TypesUrls.Root}>Types</a>
				</li>
			</ul>
		</div>
	</div>
</nav>
