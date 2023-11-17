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
	btnBaseClass?: string;
	btnDangerClass?: string;
	btnInfoClass?: string;
	inputBaseClass?: string;
	dropdownWrappingClass?: string;
	dropdownContentClass?: string;
};
