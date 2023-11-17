import { TableDefaultConfig } from '$lib/config/_config.js';
import type { TableConfig } from '$lib/types/_types.js';

export class TableConfigBuilder {
	private _config: TableConfig = { ...TableDefaultConfig };

	constructor(config?: any) {
		if (!config) return;
		// Styling Options
		if (config.hasOwnProperty('baseClass')) this._config.baseClass = config.baseClass;
		if (config.hasOwnProperty('striped')) this._config.striped = config.striped;
		if (config.hasOwnProperty('hover')) this._config.hover = config.hover;
		if (config.hasOwnProperty('bordered')) this._config.bordered = config.bordered;
		if (config.hasOwnProperty('dark')) this._config.dark = config.dark;
		if (config.hasOwnProperty('small')) this._config.small = config.small;
		if (config.hasOwnProperty('responsive')) this._config.responsive = config.responsive;

		// Top Table Control Options
		if (config.hasOwnProperty('tableControls')) this._config.tableControls = config.tableControls;
		if (config.hasOwnProperty('enableColumnFilter')) this._config.enableColumnFilter = config.enableColumnFilter;
		if (config.hasOwnProperty('enableSearch')) this._config.enableSearch = config.enableSearch;
		if (config.hasOwnProperty('tableControlsClass')) this._config.tableControlsClass = config.tableControlsClass;

		// General CSS Component Options
		if (config.hasOwnProperty('btnBaseClass')) this._config.btnBaseClass = config.btnBaseClass;
		if (config.hasOwnProperty('btnDangerClass')) this._config.btnDangerClass = config.btnDangerClass;
		if (config.hasOwnProperty('btnInfoClass')) this._config.btnInfoClass = config.btnInfoClass;
		if (config.hasOwnProperty('inputBaseClass')) this._config.inputBaseClass = config.inputBaseClass;
		if (config.hasOwnProperty('dropdownWrappingClass')) this._config.dropdownWrappingClass = config.dropdownWrappingClass;
		if (config.hasOwnProperty('dropdownContentClass')) this._config.dropdownContentClass = config.dropdownContentClass;
	}

	baseClass = (baseClass: string) => {
		this._config.baseClass = baseClass;
		return this;
	};

	striped = (value: boolean | string = true) => {
		this._config.striped = value;
		return this;
	};

	hover = (value: boolean | string = true) => {
		this._config.hover = value;
		return this;
	};

	bordered = (value: boolean | string = true) => {
		this._config.bordered = value;
		return this;
	};

	dark = (value: boolean | string = true) => {
		this._config.dark = value;
		return this;
	};

	small = (value: boolean | string = true) => {
		this._config.small = value;
		return this;
	};

	responsive = (value: boolean | string = true) => {
		this._config.responsive = value;
		return this;
	};

	tableControls = (enabled: boolean = true) => {
		this._config.tableControls = enabled;
		return this;
	};

	enableColumnFilter = (enabled: boolean = true) => {
		// TODO: [DOCUMENT] document this
		this._config.enableColumnFilter = enabled;
		return this;
	};

	tableControlsClass = (customClass: string) => {
		// TODO: [DOCUMENT] document this
		this._config.tableControlsClass = customClass;
		return this;
	};

	enableSearch = (enabled: boolean = true) => {
		// TODO: [DOCUMENT] document this
		this._config.enableSearch = enabled;
		return this;
	};

	btnBaseClass = (customClass: string) => {
		// TODO: [DOCUMENT] document this
		this._config.btnBaseClass = customClass;
		return this;
	};

	btnDangerClass = (customClass: string) => {
		// TODO: [DOCUMENT] document this
		this._config.btnDangerClass = customClass;
		return this;
	};

	btnInfoClass = (customClass: string) => {
		// TODO: [DOCUMENT] document this
		this._config.btnInfoClass = customClass;
		return this;
	};

	inputBaseClass = (customClass: string) => {
		// TODO: [DOCUMENT] document this
		this._config.inputBaseClass = customClass;
		return this;
	};

	dropdownWrappingClass = (customClass: string) => {
		// TODO: [DOCUMENT] document this
		this._config.dropdownWrappingClass = customClass;
		return this;
	};

	dropdownContentClass = (customClass: string) => {
		// TODO: [DOCUMENT] document this
		this._config.dropdownContentClass = customClass;
		return this;
	};

	build = (): TableConfig => {
		return this._config;
	};
}
