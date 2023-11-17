import type { TableConfig } from '$lib/types/_types.js';

export const TableDefaultConfig: TableConfig = {
	// Styling Options
	baseClass: 'table',
	striped: false,
	hover: false,
	bordered: false,
	dark: false,
	small: false,
	responsive: true,

	// Top Table Control Options
	tableControls: false,
	tableControlsClass: 'table-controls',
	enableColumnFilter: true,
	enableSearch: true,

	// General CSS Component Options
	btnBaseClass: 'btn',
	btnDangerClass: 'btn-danger',
	btnInfoClass: 'btn-info',
	bthWarningClass: 'btn-warning',
	inputBaseClass: 'form-control',
	dropdownWrappingClass: '',
	dropdownContentClass: ''
};
