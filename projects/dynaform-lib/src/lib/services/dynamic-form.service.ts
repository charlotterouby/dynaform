import { Injectable } from "@angular/core";
import { FormControl, FormGroup, AbstractControl } from "@angular/forms";
import { CustomValidationService } from "./custom-validation.service";
import { FullConfigOptions } from "../interfaces/questions.interface";

@Injectable({
	providedIn: "root"
})
export class DynamicFormService {
	constructor(private customValidationService: CustomValidationService) { }

	createFormGroup(listConfigFields: FullConfigOptions[]): FormGroup {
		const group = this.getFieldsToCreate(listConfigFields).reduce(
			(accumulator: { [key: string]: AbstractControl }, configField: FullConfigOptions) => {
				accumulator[configField.name] =
					configField.controlType === "section" ?
						this.createFormGroup(configField.childrenFields) :
						this.createFormControl(configField);

				return accumulator;
			}, {}
		);

		return new FormGroup(group);
	}

	getFieldsToCreate(listConfigFields: FullConfigOptions[]): FullConfigOptions[] {
		const fieldsToCreate = this.orderFormFields(listConfigFields).filter(
			configField => configField.controlType !== "button" // on ne crée pas de FormControl pour les boutons
		);
		return fieldsToCreate;
	}

	orderFormFields(listConfigFields: FullConfigOptions[]): FullConfigOptions[] {
		return listConfigFields.sort((a, b) => a.order - b.order);
	}

	createFormControl(configField: FullConfigOptions): FormControl {
		return new FormControl(
			configField.value,
			this.customValidationService.getValidators(configField.validators)
		);
	}
}
