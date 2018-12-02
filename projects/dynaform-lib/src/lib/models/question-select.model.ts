import {
  ConfigSelectField,
  OptionsSelect,
  ConfigValidator
} from "../interfaces/questions.interface";

export class QuestionSelect implements ConfigSelectField {
  controlType = "select";
  order: number;
  label: string;
  name: string;
  value: any;
  validators: ConfigValidator[];
  placeholder: string;
  optionsSelect: OptionsSelect[];

  constructor(options: ConfigSelectField) {
  	this.order = options.order;
  	this.label = options.label;
  	this.name = options.name;
  	this.value = options.value;
  	this.validators = options.validators || [];
  	this.placeholder = options.placeholder;
  	this.optionsSelect = options.optionsSelect;
  }
}
