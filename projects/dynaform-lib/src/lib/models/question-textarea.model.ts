import {
  ConfigTextarea,
  ConfigValidator
} from "../interfaces/questions.interface";

export class QuestionTextarea implements ConfigTextarea {
  controlType = "textarea";
  order: number;
  label: string;
  name: string;
  value: string | undefined;
  validators: ConfigValidator[];
  placeholder: string;

  constructor(options: ConfigTextarea) {
		this.order = options.order;
		this.label = options.label;
		this.name = options.name;
		this.value = options.value;
		this.placeholder = options.placeholder;
		this.validators = [
			{
			name: "validTextarea",
			message:
				"Saisie incorrecte. Un ou plusieurs caractères non autorisés sont utilisés."
			},
			...options.validators
		];
  }
}
