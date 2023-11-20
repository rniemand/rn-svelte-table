export class TableRowCell {
	// TODO: [DOCUMENTATION] document this
	columnIndex: number;
	content: any;
	searchContent?: string; // TODO: [DOCUMENT] document this
	class?: string;

	constructor(colIndex: number) {
		this.columnIndex = colIndex;
	}
}
