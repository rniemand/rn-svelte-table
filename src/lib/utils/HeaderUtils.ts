import type { TableHeader } from '$lib/types/_types';

export class HeaderUtils {
	static setColumnOrder = (header: TableHeader) => {
		const orderedColumns = header.columns.reduce((pv: number[], cv) => {
			pv.push(cv.columnIndex);
			return pv;
		}, []);

		orderedColumns.sort((a: number, b: number) => {
			let aOrder = header.columns[a].columnOrder || 0;
			let bOrder = header.columns[b].columnOrder || 0;
			if (aOrder === bOrder) return 0;
			return aOrder < bOrder ? -1 : 1;
		});

		let absoluteOrder = 0;
		let lastColumnIdx = orderedColumns.length - 1;
		for (const e of orderedColumns) {
			header.columns[e].firstColumn = false;
			header.columns[e].lastColumn = false;
			if (absoluteOrder === 0) header.columns[e].firstColumn = true;
			if (absoluteOrder === lastColumnIdx) header.columns[e].lastColumn = true;
			header.columns[e].columnOrder = absoluteOrder++;
		}

		header.columnOrder = orderedColumns;
	};
}
