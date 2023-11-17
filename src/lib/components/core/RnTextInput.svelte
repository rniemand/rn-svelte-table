<script lang="ts">
	import type { TableConfig } from '$lib/types/TableConfig';
	import { compileClassList } from '$lib/utils/core-utils';

	export let config: TableConfig;
	export let className: string = '';
	export let value: string = '';

	const generateClassList = (_class: string) => {
		const generated = [config.inputBaseClass];
		if (_class.length > 0) generated.push(_class);
		return compileClassList(generated);
	};

	$: inputClass = generateClassList(className);
</script>

<input class={inputClass} type="text" bind:value />
