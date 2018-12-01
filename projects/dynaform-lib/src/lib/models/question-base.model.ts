import { ValidatorFn, AsyncValidatorFn } from "@angular/forms";
import { OptionsDefinition } from "../interfaces/questions.interface";

export class QuestionBase<T> {
  value: T;
  name: string;
  label: string;
  placeholder: string;
  order: number;
  controlType: string;
  validators: ValidatorFn | Array<ValidatorFn> | null;
  asyncValidators: AsyncValidatorFn | Array<AsyncValidatorFn> | null;
  inputType: string;
  getMessageError: Function | null;

  constructor(options: OptionsDefinition = {}) {
	this.value = options.value;
	this.name = options.name || "";
	this.label = options.label || "";
	this.placeholder = options.placeholder || undefined;
	this.order = options.order === undefined ? 1 : options.order;
	this.controlType = options.controlType || "";
	this.validators = options.validators || null;
	this.asyncValidators = options.asyncValidators || null;
	this.inputType = options.inputType || "";
	this.getMessageError =
		options.getMessageError || this.defaultGetMessageError;
  }

  defaultGetMessageError(fieldCtrl) {
	if (fieldCtrl.hasError("required")) {
		return "Information requise";
	}
  }
}
