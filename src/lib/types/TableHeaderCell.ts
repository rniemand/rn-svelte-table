export type TableHeaderCell = {
	// TODO: [DOCUMENTATION] document this
	columnIndex: number;
	visible?: boolean; // TODO: [DOCUMENT] document this
	defaultVisible?: boolean; // TODO: [DOCUMENT] document this
	content: any;
	class?: string;
	noBreak?: boolean; // TODO: [DOCUMENT] document this
	columnOrder?: number; // TODO: [DOCUMENT] document this
	lastColumn?: boolean; // TODO: [DOCUMENT] document this
	firstColumn?: boolean; // TODO: [DOCUMENT] document this
};
