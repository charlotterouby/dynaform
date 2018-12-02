import { ConfigButtonForm } from "../interfaces/questions.interface";

export class FormButton implements ConfigButtonForm {
  // MinimumConfigForm
  controlType = "button";
  order: number;
  // ConfigButtonForm
  inputType: string;
  label: string;

  constructor(options: ConfigButtonForm) {
  	this.inputType = options.inputType || "button";
  	this.label = options.label || "Enregistrer";
  	this.order = options.order;
  }
}
