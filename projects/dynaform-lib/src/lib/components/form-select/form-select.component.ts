import { Component } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "dfl-form-select",
  templateUrl: "./form-select.component.html",
  styleUrls: ["./form-select.component.css"]
})
export class FormSelectComponent {
  config;
  group: FormGroup;

  constructor() {}

  get selectControl() {
	return this.group.get(this.config.name) as FormControl;
  }

  get statusFloatingLabel() {
	return this.config.placeholder ? "always" : "auto";
  }
}
