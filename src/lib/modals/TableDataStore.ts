import { writable, type Subscriber, type Writable, type Invalidator, type Updater } from 'svelte/store';
import type { TableRow } from './TableRow';
import { TableDataBuilder, TableHeaderBuilder, TableRowBuilder } from '$lib/builders/_builders';
import type { TableHeader } from '$lib/types/_types';
import { compileTableHeader } from '$lib/utils/core-utils';

export class TableDataStore {
	// TODO: [DOCUMENTATION] document this
	private _rows: TableRow[] = [];
	private _rowsStore: Writable<TableRow[]> = writable([]);
	private _initialRowsSet = false;
	private _header: TableHeader | undefined;
	private _headerStore: Writable<TableHeader> = writable();
	private _initialHeaderSet = false;

	constructor(header: TableHeader | TableHeaderBuilder | undefined = undefined) {
		if (!header) return;
		this.setTableHeader(header);
	}

	setTableHeader = (header: TableHeader | TableHeaderBuilder) => {
		this._header = compileTableHeader(header);
		if (!this._initialHeaderSet) {
			this._initialHeaderSet = true;
			this._headerStore.set(this._header);
		} else {
			this._headerStore.update((_old: TableHeader) => this._header!);
		}
		return this;
	};

	setTableData = (rows: TableRow[] | TableDataBuilder) => {
		this._rows = rows instanceof TableDataBuilder ? rows.build() : rows;
		if (!this._initialRowsSet) {
			this._initialRowsSet = true;
			this._rowsStore.set(this._rows);
		} else {
			this._rowsStore.update((_old: TableRow[]) => this._rows);
		}
		return this;
	};

	addRow = (row: TableRow | TableRowBuilder | ((builder: TableRowBuilder) => TableRowBuilder)) => {
		if (typeof row === 'function') {
			this._rows.push(row(new TableRowBuilder()).build());
		} else {
			this._rows.push(row instanceof TableRowBuilder ? row.build() : row);
		}
		this.setTableData(this._rows);
		return this;
	};

	addRows = (rows: TableRow[] | TableDataBuilder | ((builder: TableDataBuilder) => TableDataBuilder)) => {
		if (typeof rows === 'function') {
			this._rows.push(...rows(new TableDataBuilder()).build());
		} else {
			this._rows.push(...(rows instanceof TableDataBuilder ? rows.build() : rows));
		}
		this.setTableData(this._rows);
		return this;
	};

	clear = () => {
		this._rows = [];
		this.setTableData(this._rows);
		return this;
	};

	subscribeHeader = (run: Subscriber<TableHeader>, invalidate?: Invalidator<TableHeader> | undefined) => {
		return this._headerStore.subscribe(run, invalidate);
	};

	subscribeData = (run: Subscriber<TableRow[]>, invalidate?: Invalidator<TableRow[]> | undefined) => {
		return this._rowsStore.subscribe(run, invalidate);
	};

	update = (updater: Updater<TableRow[]>) => {
		this._rowsStore.update(updater);
	};
}
