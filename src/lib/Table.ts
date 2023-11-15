export type RnSvelteTableConfig = {
	baseClass: string;
	striped?: boolean | string;
	hover?: boolean | string;
	bordered?: boolean | string;
	dark?: boolean | string;
	small?: boolean | string;
	responsive?: boolean | string;
};

export function isRnSvelteTableConfig(value: any): value is RnSvelteTableConfig {
	return (value as RnSvelteTableConfig).baseClass !== undefined;
}

export const RnSvelteTableDefaultConfig: RnSvelteTableConfig = {
	baseClass: 'table',
	striped: false,
	hover: false,
	bordered: false,
	dark: false,
	small: false,
	responsive: true
};

export class RnSvelteTableConfigBuilder {
	private _config: RnSvelteTableConfig = { ...RnSvelteTableDefaultConfig };

	constructor(config?: any) {
		if (!config) return;
		if (config.hasOwnProperty('baseClass')) this._config.baseClass = config.baseClass;
		if (config.hasOwnProperty('striped')) this._config.striped = config.striped;
		if (config.hasOwnProperty('hover')) this._config.hover = config.hover;
		if (config.hasOwnProperty('bordered')) this._config.bordered = config.bordered;
		if (config.hasOwnProperty('dark')) this._config.dark = config.dark;
		if (config.hasOwnProperty('small')) this._config.small = config.small;
		if (config.hasOwnProperty('responsive')) this._config.responsive = config.responsive;
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

	build = (): RnSvelteTableConfig => {
		return this._config;
	};
}
