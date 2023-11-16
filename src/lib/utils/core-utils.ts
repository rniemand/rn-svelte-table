import { RnSvelteTableConfigBuilder } from "$lib/builders/_builders.js";
import { RnSvelteTableDefaultConfig } from "$lib/config/_config.js";
import type { RnSvelteTableConfig } from "$lib/types/_types.js";

export function isRnSvelteTableConfig(value: any): value is RnSvelteTableConfig {
	return (value as RnSvelteTableConfig).baseClass !== undefined;
}

export const compileTableConfig = (_config: any) => {
	if (!_config) return RnSvelteTableDefaultConfig;
	if (_config instanceof RnSvelteTableConfigBuilder) return _config.build();
	if (isRnSvelteTableConfig(_config)) return _config;
	console.warn(`Unsupported table configuration provided - using defaults`);
	return RnSvelteTableDefaultConfig;
};

export const generateTableClass = (_config: RnSvelteTableConfig) => {
	const tblClasses: string[] = [_config.baseClass];
	if (_config.striped) tblClasses.push(_config.striped === true ? 'table-striped' : _config.striped);
	if (_config.hover) tblClasses.push(_config.hover === true ? 'table-hover' : _config.hover);
	if (_config.bordered) tblClasses.push(_config.bordered === true ? 'table-bordered' : _config.bordered);
	if (_config.dark) tblClasses.push(_config.dark === true ? 'table-dark' : _config.dark);
	if (_config.small) tblClasses.push(_config.small === true ? 'table-sm' : _config.small);
	return tblClasses.join(' ');
};
