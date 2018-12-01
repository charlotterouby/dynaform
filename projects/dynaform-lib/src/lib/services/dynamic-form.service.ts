import { Injectable } from "@angular/core";
import { FormControl, FormGroup, AbstractControl } from "@angular/forms";
import { QuestionBase } from "../models/question-base.model";

@Injectable({
  providedIn: "root"
})
export class DynamicFormService {
  constructor() {}

  toFormGroup(questions: Array<QuestionBase<any>>) {
	const group: any = {};

	questions.forEach(question => {
		if (question.controlType !== "button") {
			group[question.name] = new FormControl(
				question.value,
				question.validators,
				question.asyncValidators
			);
		}
	});
	return new FormGroup(group);
  }

  validEmailPattern(control: AbstractControl) {
	const patternEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	const isEmailValid = patternEmail.test(control.value);
	return !isEmailValid ? { email: true } : null;
  }

  validLettersOnly(control: AbstractControl) {
	const patternLettersOnly = /^\b[a-zA-Zàâäéèëêïîôöùûüÿ\s-]*$/g;
	const isStringValid = patternLettersOnly.test(control.value);
	return !isStringValid ? { lettersOnly: true } : null;
  }

  validNumbersOnly(control: AbstractControl) {
	const pattenrNumberOnly = /^[0-9]*$/;
	const isNumberOnly = pattenrNumberOnly.test(control.value);
	return !isNumberOnly ? { numbersOnly: true } : null;
  }

  validTextarea(control: AbstractControl) {
	const patternTextarea = /^\b[A-Za-z0-9àâäéèëêïîôöùûüÿ\s.'?!,@€#-_]*$/gm;
	const isTextValid = patternTextarea.test(control.value);
	return !isTextValid ? { textInvalid: true } : null;
  }

  validPhoneNumber(control: AbstractControl) {
	const patternPhoneNumber = /^0[1-6]{1}(([0-9]{2}){4})|((\s[0-9]{2}){4})|((-[0-9]{2}){4})$/g;
	const isPhoneNumberValid = patternPhoneNumber.test(control.value);
	return !isPhoneNumberValid ? { phoneNumber: true } : null;
  }
}
