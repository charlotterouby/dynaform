import { Component } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "dfl-form-radio",
  templateUrl: "./form-radio.component.html",
  styleUrls: ["./form-radio.component.css"]
})
export class FormRadioComponent {
  config;
  group: FormGroup;

  constructor() {}

  get radioControl() {
	return this.group.get(this.config.name) as FormControl;
  }
}
