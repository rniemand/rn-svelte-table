<script lang="ts">
	import { page } from '$app/stores';
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
					<a class="nav-link" class:active={currentRoute === '/'} href="/">Home</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" class:active={currentRoute === '/dev'} href="/dev">Dev</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" class:active={currentRoute.startsWith('/config')} href="/config">Config</a>
				</li>
			</ul>
		</div>
	</div>
</nav>
