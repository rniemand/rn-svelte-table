<script lang="ts">
	import { RnSvelteTableDefaultConfig, RnSvelteTableConfigBuilder, type RnSvelteTableConfig, isRnSvelteTableConfig } from './Table.js';

	export let config: RnSvelteTableConfig | RnSvelteTableConfigBuilder | undefined | null = RnSvelteTableDefaultConfig;
	let builtConfig: RnSvelteTableConfig;
	let tableClass: string = 'table';

	const compileTableConfig = (_config: any) => {
		if (!_config) return RnSvelteTableDefaultConfig;
		if (_config instanceof RnSvelteTableConfigBuilder) return _config.build();
		if (isRnSvelteTableConfig(_config)) return _config;
		console.warn(`Unsupported table configuration provided - using defaults`);
		return RnSvelteTableDefaultConfig;
	};

	const generateTableClass = (_config: RnSvelteTableConfig) => {
		const tblClasses: string[] = [_config.baseClass];
		if (_config.striped) tblClasses.push(_config.striped === true ? 'table-striped' : _config.striped);
		if (_config.hover) tblClasses.push(_config.hover === true ? 'table-hover' : _config.hover);
		if (_config.bordered) tblClasses.push(_config.bordered === true ? 'table-bordered' : _config.bordered);
		if (_config.dark) tblClasses.push(_config.dark === true ? 'table-dark' : _config.dark);
		if (_config.small) tblClasses.push(_config.small === true ? 'table-sm' : _config.small);
		return tblClasses.join(' ');
	};

	$: builtConfig = compileTableConfig(config);
	$: tableClass = generateTableClass(builtConfig);
</script>

<div class:table-responsive={builtConfig.responsive === true} class={typeof builtConfig.responsive === 'string' ? builtConfig.responsive : ''}>
	<table class={tableClass}>
		<thead>
			<tr>
				<th>Column 1</th>
				<th>Column 2</th>
				<th>Column 3</th>
				<th>Column 4</th>
			</tr>
		</thead>
	</table>
</div>
