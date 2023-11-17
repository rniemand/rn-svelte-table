import { TableRow } from '$lib/types/_types';
import { TableRowCellBuilder } from './_builders';

export class TableRowBuilder {
	// TODO: [DOCUMENTATION] document this
	private _row: TableRow = new TableRow();

	constructor() {
		// complete this
	}

	withClass = (className: string | any[] | (() => string)) => {
		// TODO: [OPTIMIZE] <1700109597322> combine
		if (typeof className === 'string') {
			this._row.class = className;
		} else if (className instanceof Array) {
			this._row.class = className
				.reduce((pv: string[], cv) => {
					if (typeof cv === 'string') pv.push(cv);
					if (typeof cv === 'function') {
						const fnOutput = cv();
						if (typeof fnOutput === 'string') pv.push(fnOutput);
					}
					return pv;
				}, [])
				.join(' ');
		} else if (typeof className === 'function') {
			const fnOutput = className();
			if (typeof fnOutput === 'string') this._row.class = fnOutput;
		}
		return this;
	};

	addColumn = (func: (builder: TableRowCellBuilder) => TableRowCellBuilder) => {
		// TODO: [COMPLETE] allow args of: builder, builder func, table row
		if (typeof func !== 'function') throw new Error('Expected a builder function to be provided!');
		this._row.columns.push(func(new TableRowCellBuilder(this._row.columns.length)).build());
		return this;
	};

	build = () => {
		this._row.syncSearchString();
		return this._row;
	};
}
