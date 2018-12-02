import {
  ConfigSectionForm,
  ConfigValidator,
  MinimumConfigForm
} from "../interfaces/questions.interface";

export class FormSection implements ConfigSectionForm {
  controlType = "section";
  order: number;
  childrenFields: MinimumConfigForm[];
  label: string;
  name: string;
  validators: ConfigValidator[];

  constructor(options: ConfigSectionForm) {
  	this.order = options.order;
  	this.childrenFields = options.childrenFields;
  	this.label = options.label;
  	this.name = options.name;
  	this.validators = options.validators || [];
  }
}
