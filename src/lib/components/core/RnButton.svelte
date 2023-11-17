<script lang="ts">
	import type { TableConfig } from '$lib/types/TableConfig';
	import { compileClassList } from '$lib/utils/core-utils';

	export let config: TableConfig;
	export let className: string = '';
	export let color: 'danger' | 'info' | 'warning' | '' = '';
	export let fullWidth: boolean = false;
	export let disabled: boolean = false;

	const generateClassList = (color: string, _class: string) => {
		const generated = [config.btnBaseClass];
		if (color == 'danger') generated.push(config.btnDangerClass);
		if (color == 'info') generated.push(config.btnInfoClass);
		if (color == 'warning') generated.push(config.bthWarningClass);
		generated.push(_class);
		return compileClassList(generated);
	};

	$: btnClass = generateClassList(color, className);
</script>

<button class={btnClass} class:fullWidth on:click {disabled}>
	<slot />
</button>

<style>
	.fullWidth {
		width: 100%;
	}
</style>
