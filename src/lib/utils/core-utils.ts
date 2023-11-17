import { TableConfigBuilder, TableDataBuilder, TableHeaderBuilder } from '$lib/builders/_builders.js';
import { TableDefaultConfig } from '$lib/config/_config.js';
import type { TableConfig, TableHeader, TableRow } from '$lib/types/_types.js';

export function isTableConfig(value: any): value is TableConfig {
	return (value as TableConfig).baseClass !== undefined;
}

export const compileTableConfig = (_config: TableConfig | TableConfigBuilder) => {
	if (!_config) return TableDefaultConfig;
	if (_config instanceof TableConfigBuilder) return _config.build();
	if (isTableConfig(_config)) return _config;
	console.warn(`Unsupported table configuration provided - using defaults`);
	return TableDefaultConfig;
};

export const compileTableHeader = (header: TableHeader | TableHeaderBuilder) => {
	if (!header) throw new Error('Property "header" is required!');
	if (header instanceof TableHeaderBuilder) return header.build();
	return header;
};

export const generateTableClass = (_config: TableConfig) => {
	const tblClasses: string[] = [_config.baseClass];
	if (_config.striped) tblClasses.push(_config.striped === true ? 'table-striped' : _config.striped);
	if (_config.hover) tblClasses.push(_config.hover === true ? 'table-hover' : _config.hover);
	if (_config.bordered) tblClasses.push(_config.bordered === true ? 'table-bordered' : _config.bordered);
	if (_config.dark) tblClasses.push(_config.dark === true ? 'table-dark' : _config.dark);
	if (_config.small) tblClasses.push(_config.small === true ? 'table-sm' : _config.small);
	return tblClasses.join(' ');
};
