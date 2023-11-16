import type { TableHeaderCell } from "$lib/types/_types.js";

export class TableHeaderCellBuilder {
	// TODO: [DOCUMENTATION] document this
	private _cell: TableHeaderCell = {
		columnIndex: 0,
		content: undefined
	};

	constructor(columnIndex: number) {
		this._cell.columnIndex = columnIndex;
	}

	withContent = (content: any) => {
		this._cell.content = content;
		return this;
	};

	withClass = (className: string | any[] | (() => string)) => {
		if(typeof className === 'string') {
			this._cell.class = className;
		}
		else if(className instanceof Array) {
			this._cell.class = className.reduce((pv: string[], cv) => {
				if(typeof cv === 'string') pv.push(cv);
				if(typeof cv === 'function') {
					const fnOutput = cv();
					if(typeof fnOutput === 'string') pv.push(fnOutput);
				}
				return pv;
			}, []).join(' ');
		}
		else if(typeof className === 'function') {
			const fnOutput = className();
			if(typeof fnOutput === 'string') this._cell.class = fnOutput;
		}
		return this;
	}

	build = () => {
		console.log('TableHeaderCellBuilder.build()');
		return this._cell;
	};
};
