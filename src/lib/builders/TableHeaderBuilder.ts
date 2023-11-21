import type { TableHeader } from '$lib/types/_types.js';
import { HeaderUtils } from '$lib/utils/HeaderUtils.js';
import { TableHeaderCellBuilder } from './_builders.js';

export class TableHeaderBuilder {
	private _header: TableHeader = {
		columns: [], // TODO: [DOCUMENT] document this
		columnOrder: [] // TODO: [DOCUMENT] document this
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

	build = () => {
		HeaderUtils.setColumnOrder(this._header);
		return this._header;
	};
}
