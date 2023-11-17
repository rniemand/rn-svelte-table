export type TableConfig = {
	// Styling Options
	baseClass: string;
	striped?: boolean | string;
	hover?: boolean | string;
	bordered?: boolean | string;
	dark?: boolean | string;
	small?: boolean | string;
	responsive?: boolean | string;

	// Top Table Control Options
	tableControls?: boolean;
	tableControlsClass?: string; // TODO: [DOCUMENT] document this
	enableSearch?: boolean; // TODO: [DOCUMENT] document this
	enableColumnFilter?: boolean; // TODO: [DOCUMENT] document this

	// General CSS Component Options
	btnBaseClass?: string; // TODO: [DOCUMENT] document this
	btnDangerClass?: string; // TODO: [DOCUMENT] document this
	btnInfoClass?: string; // TODO: [DOCUMENT] document this
	bthWarningClass?: string; // TODO: [DOCUMENT] document this
	inputBaseClass?: string; // TODO: [DOCUMENT] document this
	dropdownWrappingClass?: string; // TODO: [DOCUMENT] document this
	dropdownContentClass?: string; // TODO: [DOCUMENT] document this
};
