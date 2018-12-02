import { Injectable } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ValidatorFn,
  AsyncValidatorFn
} from "@angular/forms";
import { QuestionBase } from "../models/question-base.model";
import { CustomValidationService } from "./custom-validation.service";

@Injectable({
  providedIn: "root"
})
export class DynamicFormService {
  constructor(private customValidationService: CustomValidationService) {}

  createFormGroup(listConfigFields: QuestionBase<any>[]) {
	const group = this.getFieldsToCreate(listConfigFields).reduce(
		(accumulator, configField) => {
		accumulator[configField.name] =
			configField.controlType === "section"
			? this.createFormGroup(configField.childrenFields)
			: this.createFormControl(configField);

		return accumulator;
		},
		{}
	);

	return new FormGroup(group);
  }

  getFieldsToCreate(
	listConfigFields: QuestionBase<any>[]
  ): QuestionBase<any>[] {
	const fieldsToCreate = this.orderFormFields(listConfigFields).filter(
		configField => configField.controlType !== "button" // on ne crée pas de FormControl pour les boutons
	);
	return fieldsToCreate;
  }

  orderFormFields(listConfigFields: QuestionBase<any>[]): QuestionBase<any>[] {
	return listConfigFields.sort((a, b) => a.order - b.order);
  }

  createFormControl(configField): FormControl {
	return new FormControl(
		configField.value,
		this.getValidators(configField),
		this.getAsyncValidators(configField)
	);
  }

  getValidators(configField: QuestionBase<any>): ValidatorFn[] {
	return configField.validators
		? configField.validators
			.filter(
			validator =>
				this.customValidationService.mapValidatorsType[validator]
			)
			.map(validator => {
			switch (validator) {
				case "minLength":
				return this.customValidationService.mapValidatorsType[
					validator
				](configField.minLength);
				case "maxLength":
				return this.customValidationService.mapValidatorsType[
					validator
				](configField.maxLength);
				default:
				return this.customValidationService.mapValidatorsType[
					validator
				];
			}
			})
		: null;
  }

  getAsyncValidators(configField: QuestionBase<any>): AsyncValidatorFn[] {
	return configField.validators
		? configField.validators
			.filter(validator => {
			return this.customValidationService.mapAsyncValidatorType[
				validator
			];
			})
			.map(validator => {
			return this.customValidationService.mapAsyncValidatorType[
				validator
			];
			})
		: null;
  }
}
