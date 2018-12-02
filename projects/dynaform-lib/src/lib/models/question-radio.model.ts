import {
  ConfigRadioField,
  OptionsSelect,
  ConfigValidator
} from "../interfaces/questions.interface";

export class QuestionRadio implements ConfigRadioField {
  controlType = "radio";
  order: number;
  label: string;
  name: string;
  value: any;
  validators: ConfigValidator[];
  optionsSelect: OptionsSelect[];

  constructor(options: ConfigRadioField) {
  	this.order = options.order;
  	this.label = options.label;
  	this.name = options.name;
  	this.value = options.value;
  	this.validators = options.validators || [];
  	this.optionsSelect = options.optionsSelect;
  }
}
