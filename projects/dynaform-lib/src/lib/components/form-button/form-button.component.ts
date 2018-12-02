import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormButton } from "../../models/form-button.model";

@Component({
  selector: "dfl-form-button",
  templateUrl: "./form-button.component.html",
  styleUrls: ["./form-button.component.css"]
})
export class FormButtonComponent implements OnInit {
  config: FormButton;
  group: FormGroup;
  buttonColor = "primary";

  constructor() {}

  ngOnInit() {
	this.buttonColor =
		this.config.inputType === "submit" ? "accent" : "primary";
  }
}
