import type { TableHeader } from '$lib/types/_types.js';
import { TableHeaderCellBuilder } from './_builders.js';

export class TableHeaderBuilder {
	// TODO: [DOCUMENTATION] document this
	private _header: TableHeader = {
		columns: []
	};

	constructor() {
		// flesh this out
	}

	addColumn = (func: (builder: TableHeaderCellBuilder) => TableHeaderCellBuilder) => {
		// TODO: [COMPLETE] allow args of: builder, builder func, table header
		if (typeof func !== 'function') throw new Error('Expected a builder function to be provided!');
		this._header.columns.push(func(new TableHeaderCellBuilder(this._header.columns.length)).build());
		return this;
	};

	build = () => this._header;
}
