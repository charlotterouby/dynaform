import { QuestionBase } from "./question-base.model";
import {
  OptionsDefinition,
  OptionsSelect
} from "../interfaces/questions.interface";

export class QuestionRadio extends QuestionBase<string> {
  controlType = "radio";
  optionsSelect: OptionsSelect[] = [];

  constructor(options: OptionsDefinition = {}) {
	super(options);
	this.optionsSelect = options["optionsSelect"] || [];
  }
}
