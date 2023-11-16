import type { TableRow } from "$lib/types/_types";
import { TableRowBuilder } from "./_builders";

export class TableDataBuilder {
    // TODO: [DOCUMENTATION] document this
    private _rows: TableRow[] = [];

    constructor() {
        // complete me
    }

    addRow = (func: (builder: TableRowBuilder) => TableRowBuilder) => {
        // TODO: [COMPLETE] allow args of: builder, builder func, table row
        if(typeof func !== 'function') throw new Error('Expected a builder function to be provided!');
		this._rows.push(func(new TableRowBuilder()).build());
		return this;
    };

    build = () => this._rows;
}