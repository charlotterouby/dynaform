import { TestBed, inject } from "@angular/core/testing";

import { DynamicFormService } from "./dynamic-form.service";
import { QuestionInput } from "../models/question-input.model";
import { FormButton } from "../models/form-button.model";
import { FullConfigOptions } from "../interfaces/questions.interface";

describe("DynamicFormService", () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [DynamicFormService]
		});
	});

	it("should be created", inject(
		[DynamicFormService],
		(service: DynamicFormService) => {
			expect(service).toBeTruthy();
		}
	));

	it("should create a FormGroup", inject(
		[DynamicFormService],
		(service: DynamicFormService) => {
			const questions: FullConfigOptions[] = [
				new QuestionInput({
					controlType: "",
					name: "firstName",
					label: "First name",
					inputType: "text",
					validators: [{ name: "required" }],
					order: 1
				}),
				new FormButton({
					label: "Submit",

					controlType: "button",
					inputType: "submit",
					order: 5
				})
			];

			const form = service.createFormGroup(questions);

			expect(form).toBeDefined("createFormGroup devrait retourner une valeur");
			expect(form.get("firstName")).not.toBeNull(
				"form devrait avoir un champ `firstName`"
			);
			expect(form.get("firstName").getError("required")).toBe(
				true,
				"Le champ `firstName` devrait être requis"
			);
			expect(form.get("submit")).toBeNull(
				"form ne devrait pas avoir de champ `submit`"
			);
		}
	));
});
