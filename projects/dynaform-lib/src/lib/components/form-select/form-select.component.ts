import { Component } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { CustomValidationService } from "../../services/custom-validation.service";

@Component({
  selector: "dfl-form-select",
  templateUrl: "./form-select.component.html",
  styleUrls: ["./form-select.component.css"]
})
export class FormSelectComponent {
  config;
  group: FormGroup;

  constructor(private customValidationService: CustomValidationService) {}

  get selectControl(): FormControl {
	  return this.group.get(this.config.name) as FormControl;
  }

  get statusFloatingLabel(): string {
	  return this.config.placeholder ? "always" : "auto";
  }

  get messageError(): string {
  	const listErrors = Object.keys(this.selectControl.errors);
  	return this.customValidationService.getMessageError(
  		this.config.validators,
  		listErrors[0]
  	);
  }
}
