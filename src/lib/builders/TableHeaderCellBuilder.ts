import type { TableHeaderCell } from '$lib/types/_types.js';

export class TableHeaderCellBuilder {
	// TODO: [DOCUMENTATION] document this
	private _cell: TableHeaderCell = {
		columnIndex: 0,
		columnOrder: -1,
		visible: true, // TODO: [DOCUMENT] document this
		defaultVisible: false, // TODO: [DOCUMENT] document this
		content: undefined,
		noBreak: false,
		class: ''
	};

	constructor(columnIndex: number) {
		this._cell.columnIndex = columnIndex;
		this._cell.columnOrder = columnIndex;
	}

	withContent = (content: any) => {
		this._cell.content = content;
		return this;
	};

	withNoBreak = (enabled: boolean = true) => {
		// TODO: [DOCUMENT] document this
		this._cell.noBreak = enabled;
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

	visible = (visible: boolean = true) => {
		// TODO: [DOCUMENT] document this
		this._cell.visible = visible;
		return this;
	};

	visibleAndDefault = (visible: boolean = true) => {
		// TODO: [DOCUMENT] document this
		this._cell.visible = visible;
		this._cell.defaultVisible = visible;
		return this;
	};

	columnOrder = (order: number) => {
		// TODO: [DOCUMENT] document this
		this._cell.columnOrder = order;
		return this;
	};

	build = () => this._cell;
}
