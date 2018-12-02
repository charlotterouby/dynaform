import {
  ConfigInputForm,
  ConfigValidator
} from "../interfaces/questions.interface";

export class QuestionInput implements ConfigInputForm {
  controlType = "input";
  order: number;
  label: string;
  name: string;
  value: any;
  validators: ConfigValidator[];
  inputType: string;
  placeholder: string;

  constructor(options: ConfigInputForm) {
  	this.order = options.order;
  	this.label = options.label;
  	this.name = options.name;
  	this.value = options.value;
  	this.validators = options.validators || [];
  	this.inputType = options.inputType || "text";
  	this.placeholder = options.placeholder;
  }
}
