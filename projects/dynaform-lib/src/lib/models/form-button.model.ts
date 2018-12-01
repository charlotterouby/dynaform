import { QuestionBase } from "./question-base.model";
import { OptionsDefinition } from "../interfaces/questions.interface";

export class FormButton extends QuestionBase<string> {
  controlType = "button";
  inputType: string;

  constructor(options: OptionsDefinition = {}) {
	super(options);
	this.inputType = options["inputType"] || "button";
  }
}
