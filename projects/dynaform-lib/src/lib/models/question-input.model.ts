import { QuestionBase } from "./question-base.model";
import { OptionsDefinition } from "../interfaces/questions.interface";

export class QuestionInput extends QuestionBase<string> {
  controlType = "input";
  inputType: string;

  constructor(options: OptionsDefinition = {}) {
	super(options);
	this.inputType = options["inputType"] || "text";
  }
}
