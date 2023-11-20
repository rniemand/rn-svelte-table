import type { TableRowCell } from './_modals';

export class TableRow {
	// TODO: [DOCUMENTATION] document this
	columns: TableRowCell[] = [];
	class?: string;
	searchString: string = ''; // TODO: [DOCUMENT] document this

	syncSearchString = () => {
		this.searchString = this.columns
			.reduce((pv: string[], cv) => {
				if (cv.searchContent) {
					pv.push(cv.searchContent);
				} else {
					const cvType = typeof cv.content;
					if (cvType === 'string') {
						pv.push(cv.content);
					} else if (cvType === 'boolean' || cvType === 'bigint' || cvType === 'number') {
						pv.push(`${cv.content}`);
					} else if (cvType === 'object') {
						if (cv.content instanceof Date) {
							pv.push(cv.content.toDateString());
							pv.push(cv.content.toTimeString());
						} else {
							console.warn(`Unsupported column data type: (${typeof cv.content}) ${cv.content}`);
						}
					} else {
						console.warn(`Unsupported column data type: (${typeof cv.content}) ${cv.content}`);
					}
				}
				return pv;
			}, [])
			.join('|')
			.toLowerCase()
			.trim();
	};
}
