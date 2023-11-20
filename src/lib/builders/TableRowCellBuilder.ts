import { TableRowCell } from '$lib/modals/_modals';

export class TableRowCellBuilder {
	// TODO: [DOCUMENTATION] document this
	private _cell: TableRowCell;

	constructor(columnIndex: number) {
		this._cell = new TableRowCell(columnIndex);
	}

	withContent = (content: any) => {
		this._cell.content = content;
		return this;
	};

	withClass = (className: string | any[] | (() => string)) => {
		// TODO: [OPTIMIZE] <1700109597322> combine
		if (typeof className === 'string') {
			this._cell.class = className;
		} else if (className instanceof Array) {
			this._cell.class = className
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
			if (typeof fnOutput === 'string') this._cell.class = fnOutput;
		}
		return this;
	};

	build = () => this._cell;
}
