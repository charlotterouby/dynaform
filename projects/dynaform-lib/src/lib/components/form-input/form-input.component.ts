import { Component } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { CustomValidationService } from "../../services/custom-validation.service";

@Component({
  selector: "dfl-form-input",
  styleUrls: ["./form-input.component.css"],
  templateUrl: "./form-input.component.html"
})
export class FormInputComponent {
  config;
  group: FormGroup;

  constructor(private customValidationService: CustomValidationService) {}

  get inputControl(): FormControl {
	return this.group.get(this.config.name) as FormControl;
  }

  get messageError(): string {
  	const listErrors = Object.keys(this.inputControl.errors);
  	return this.customValidationService.getMessageError(
  		this.config.validators,
  		listErrors[0]
  	);
  }
}
