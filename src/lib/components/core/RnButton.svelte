<script lang="ts">
	import type { TableConfig } from '$lib/types/TableConfig';
	import { compileClassList } from '$lib/utils/core-utils';

	export let config: TableConfig;
	export let className: string = '';
	export let color: 'danger' | 'info' | '' = '';

	const generateClassList = (color: string, _class: string) => {
		const generated = [config.btnBaseClass];
		if (color == 'danger') generated.push(config.btnDangerClass);
		if (color == 'info') generated.push(config.btnInfoClass);
		generated.push(_class);
		return compileClassList(generated);
	};

	$: btnClass = generateClassList(color, className);
</script>

<button class={btnClass} on:click>
	<slot />
</button>
