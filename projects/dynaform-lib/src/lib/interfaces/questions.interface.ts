import { QuestionBase } from "../models/question-base.model";

export interface OptionsDefinition {
  value?: any;
  name?: string;
  label?: string;
  placeholder?: string;
  order?: number;
  controlType?: string;
  validators?: string[];
  inputType?: string;
  getMessageError?: Function;
  childrenFields?: QuestionBase<any>[];
  maxLength?: number;
  minLength?: number;
  optionsSelect?: OptionsSelect[];
}

export interface OptionsSelect {
  code: string | number;
  libelle: string | number;
  order?: number;
}
