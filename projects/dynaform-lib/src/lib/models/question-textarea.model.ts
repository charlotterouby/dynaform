import { QuestionBase } from "./question-base.model";
import { OptionsDefinition } from "../interfaces/questions.interface";
import { FormControl } from "@angular/forms";

export class QuestionTextarea extends QuestionBase<string> {
  controlType = "textarea";
  inputType: string;

  constructor(options: OptionsDefinition = {}) {
	super(options);
	this.inputType = options.inputType || "text";
	this.validators = ["validTextarea", ...options.validators];
  }

  getDefaultMessageError(fieldCtrl: FormControl) {
	if (fieldCtrl.hasError("required")) {
		return "Information requise";
	}
	if (fieldCtrl.hasError("textInvalid")) {
		return "Saisie incorrecte. Un ou plusieurs caractères non autorisés sont utilisés.";
	}
  }
}
