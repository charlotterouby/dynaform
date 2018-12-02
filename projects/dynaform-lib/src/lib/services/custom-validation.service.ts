import { Injectable } from "@angular/core";
import { AbstractControl, Validators } from "@angular/forms";

@Injectable({
  providedIn: "root"
})
export class CustomValidationService {
  mapValidatorsType = {
	required: Validators.required,
	validEmailPattern: this.validEmailPattern,
	validLettersOnly: this.validLettersOnly,
	validNumbersOnly: this.validNumbersOnly,
	validTextarea: this.validTextarea,
	validPhoneNumber: this.validPhoneNumber,
	minLength: Validators.minLength,
	maxLength: Validators.maxLength
  };

  mapAsyncValidatorType = {};

  constructor() {}

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
