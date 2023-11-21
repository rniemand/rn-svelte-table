import type { TableHeaderCell } from './_types.js';

export type TableHeader = {
	// TODO: [DOCUMENTATION] document this
	columns: TableHeaderCell[];
	columnOrder: number[];
};
