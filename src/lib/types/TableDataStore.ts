import {  writable, type Subscriber, type Writable, type Invalidator, type Updater } from "svelte/store";
import type { TableRow } from "./TableRow";
import { TableDataBuilder, TableRowBuilder } from "$lib/builders/_builders";

export class TableDataStore {
    // TODO: [DOCUMENTATION] document this
    private _store: Writable<TableRow[]> = writable([]);
    private _rows: TableRow[] = [];

    set = (rows: TableRow[]) => {
        this._rows = rows;
        this._store.set(this._rows);
        return this;
    };

    addRow = (row: TableRow | TableRowBuilder | ((builder: TableRowBuilder) => TableRowBuilder)) => {
        if(typeof row === 'function') {
            this._rows.push(row(new TableRowBuilder()).build());
        } else {
            this._rows.push(row instanceof TableRowBuilder ? row.build() : row);
        }
        this.set(this._rows);
        return this;
    };

    addRows = (rows: TableRow[] | TableDataBuilder | ((builder: TableDataBuilder) => TableDataBuilder)) => {
        if(typeof rows === 'function') {
            this._rows.push(...rows(new TableDataBuilder()).build());
        } else {
            this._rows.push(...rows instanceof TableDataBuilder ? rows.build() : rows);
        }
        this.set(this._rows);
        return this;
    };

    clear = () => {
        this._rows = [];
        this.set(this._rows);
        return this;
    };

    subscribe = (run: Subscriber<TableRow[]>, invalidate?: Invalidator<TableRow[]> | undefined) => {
        return this._store.subscribe(run, invalidate);
    };

    update = (updater: Updater<TableRow[]>) => {
        this._store.update(updater);
    };
};
