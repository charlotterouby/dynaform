import { Component } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { CustomValidationService } from "../../services/custom-validation.service";

@Component({
  selector: "dfl-form-radio",
  templateUrl: "./form-radio.component.html",
  styleUrls: ["./form-radio.component.css"]
})
export class FormRadioComponent {
  config;
  group: FormGroup;

  constructor(private customValidationService: CustomValidationService) {}

  get radioControl(): FormControl {
	return this.group.get(this.config.name) as FormControl;
  }

  get messageError(): string {
  	const listErrors = Object.keys(this.radioControl.errors);
  	return this.customValidationService.getMessageError(
  		this.config.validators,
  		listErrors[0]
  	);
  }
}
