import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { CustomValidationService } from "../../services/custom-validation.service";

@Component({
  selector: "dfl-form-section",
  templateUrl: "./form-section.component.html",
  styleUrls: ["./form-section.component.css"]
})
export class FormSectionComponent {
  config;
  group: FormGroup;

  constructor(private customValidationService: CustomValidationService) { }

  get sectionFormGroup(): FormGroup {
	  return this.group.get(this.config.name) as FormGroup;
  }

  get messageError(): string {
  	const listErrors = Object.keys(this.sectionFormGroup.errors);
  	return this.customValidationService.getMessageError(
  		this.config.validators,
  		listErrors[0]
  	);
  }
}
