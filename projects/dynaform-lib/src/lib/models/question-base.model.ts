import { FormControl } from "@angular/forms";
import { OptionsDefinition } from "../interfaces/questions.interface";

export class QuestionBase<T> implements OptionsDefinition {
  childrenFields: QuestionBase<any>[] | null;
  controlType: string;
  getMessageError: Function | null;
  inputType: string;
  label: string;
  maxLength: number | null;
  minLength: number | null;
  name: string;
  order: number;
  placeholder: string;
  validators: string[] | null;
  value: T;

  constructor(options: OptionsDefinition = {}) {
	this.childrenFields = options.childrenFields || [];
	this.controlType = options.controlType || "";
	this.getMessageError =
		options.getMessageError || this.getDefaultMessageError;
	this.inputType = options.inputType || "";
	this.label = options.label || "";
	this.maxLength = options.maxLength || null;
	this.minLength = options.minLength || null;
	this.name = options.name || "";
	this.order = options.order || 1;
	this.placeholder = options.placeholder || undefined;
	this.validators = options.validators || null;
	this.value = options.value;
  }

  getDefaultMessageError(fieldCtrl: FormControl) {
	if (fieldCtrl.hasError("required")) {
		return "Information requise";
	}
  }
}
