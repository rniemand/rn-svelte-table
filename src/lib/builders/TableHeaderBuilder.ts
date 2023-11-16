import type { TableHeader } from "$lib/types/_types.js";
import { TableHeaderCellBuilder } from "./_builders.js";

export class TableHeaderBuilder {
	// TODO: [DOCUMENTATION] document this
	private _header: TableHeader = {
		columns: []
	};

	constructor() {
		console.log('new instance of TableHeaderBuilder() created');
	}

	addColumn = (func: (builder: TableHeaderCellBuilder) => TableHeaderCellBuilder) => {
		if(typeof func !== 'function') throw new Error('Expected a builder function to be provided!');
		this._header.columns.push(func(new TableHeaderCellBuilder(this._header.columns.length)).build());
		return this;
	}

	build = () => {
		console.log('TableHeaderBuilder.build()');
		return this._header;
	}
};
