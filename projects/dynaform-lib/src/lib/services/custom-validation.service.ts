import { Injectable } from "@angular/core";
import { AbstractControl, Validators, ValidatorFn, AsyncValidatorFn } from "@angular/forms";
import { ConfigValidator } from "../interfaces/questions.interface";

@Injectable({
	providedIn: "root"
})
export class CustomValidationService {
	mapValidators = {
		required: {
			method: Validators.required,
			defaultMessage: "Information requise."
		},
		mail: {
			method: this.validEmailPattern,
			defaultMessage: "Saisie incorrecte. Cette adresse mail n'est pas valide."
		},
		lettersOnly: {
			method: this.validLettersOnly,
			defaultMessage: "Saisie incorrecte. Ce champ n'accepte que des lettres."
		},
		numbersOnly: {
			method: this.validNumbersOnly,
			defaultMessage: "Saisie incorrecte. Ce champ n'accepte que des nombres."
		},
		textareaInvalid: {
			method: this.validTextarea,
			defaultMessage: "Saisie incorrecte. Un ou plusieurs caractères non autorisés sont utilisés."
		},
		phoneNumber: {
			method: this.validPhoneNumber,
			defaultMessage: "Saisie incorrecte. Ce numéro de téléphone n'est pas valide."
		},
		minLength: {
			method: Validators.minLength,
			defaultMessage: "Saisie incorrecte. Votre saisie ne comprend pas le nombre de caractères attendu."
		},
		maxLength: {
			method: Validators.maxLength,
			defaultMessage: "Saisie incorrecte. Votre saisie ne comprend pas le nombre de caractères attendu."
		}
	};

	validEmailPattern(control: AbstractControl): { email: boolean } {
		const patternEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		const isEmailValid = patternEmail.test(control.value);
		return !isEmailValid ? {
			email: true
		} : null;
	}

	validLettersOnly(control: AbstractControl): { lettersOnly: boolean } {
		const patternLettersOnly = /^\b[a-zA-Zàâäéèëêïîôöùûüÿ\s-]*$/g;
		const isStringValid = patternLettersOnly.test(control.value);
		return !isStringValid ? {
			lettersOnly: true
		} : null;
	}

	validNumbersOnly(control: AbstractControl): { numbersOnly: boolean } {
		const pattenrNumberOnly = /^[0-9]*$/;
		const isNumberOnly = pattenrNumberOnly.test(control.value);
		return !isNumberOnly ? {
			numbersOnly: true
		} : null;
	}

	validTextarea(control: AbstractControl): { textareaInvalid: boolean } {
		const patternTextarea = /^\b[A-Za-z0-9àâäéèëêïîôöùûüÿ\s.'?!,@€#-_]*$/gm;
		const isTextValid = patternTextarea.test(control.value);
		return !isTextValid ? {
			textareaInvalid: true
		} : null;
	}

	validPhoneNumber(control: AbstractControl): { phoneNumber: boolean } {
		const patternPhoneNumber = /^0[1-6]{1}(([0-9]{2}){4})|((\s[0-9]{2}){4})|((-[0-9]{2}){4})$/g;
		const isPhoneNumberValid = patternPhoneNumber.test(control.value);
		return !isPhoneNumberValid ? {
			phoneNumber: true
		} : null;
	}

	getValidators(listConfigValidators: ConfigValidator[]): ValidatorFn[] {
		const listValidatorsFunc = listConfigValidators.map((configValidator) => {
			if (configValidator.param) {
				return this.mapValidators[configValidator.name].method(configValidator.param);
			}
			return this.mapValidators[configValidator.name].method;
		});
		return listValidatorsFunc;
	}

	getMessageError(listConfigValidators: ConfigValidator[], typeError: string): string {
		for (const configError of listConfigValidators) {
			if (configError.name === typeError) {
				return configError.message && configError.message.length ?
					configError.message :
					this.getDefaultMessageError(typeError);
			}
		}
	}

	getDefaultMessageError(typeError: string): string {
		return this.mapValidators[typeError].defaultMessage || "Information incorrecte.";
	}
}
