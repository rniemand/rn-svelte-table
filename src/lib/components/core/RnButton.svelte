<script lang="ts">
	import type { TableConfig } from '$lib/types/TableConfig';

	export let config: TableConfig;
	export let className: string = '';
	export let color: 'danger' = 'danger';

	const generateClassList = (color: string, _class: string) => {
		const generated = [config.btnBaseClass];
		if (color == 'danger') generated.push(config.btnDangerClass);
		if (_class.length > 0) generated.push(_class);
		return generated.join(' ');
	};

	$: btnClass = generateClassList(color, className);
</script>

<button class={btnClass}>
	<slot />
</button>
