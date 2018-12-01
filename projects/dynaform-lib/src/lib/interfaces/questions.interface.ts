import { ValidatorFn, AsyncValidatorFn } from '@angular/forms';

export interface OptionsDefinition {
	value?: any;
	name?: string;
	label?: string;
	placeholder?: string;
	order?: number;
	controlType?: string;
	validators?: ValidatorFn | Array<ValidatorFn>;
	asyncValidators?: AsyncValidatorFn | Array<AsyncValidatorFn>;
	inputType?: string;
	getMessageError?: Function;
}
