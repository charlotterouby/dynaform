import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { QuestionBase } from "../../models/question-base.model";
import { DynamicFormService } from "../../services/dynamic-form.service";

@Component({
  selector: "dfl-dynamic-form",
  templateUrl: "./dynamic-form.component.html",
  styleUrls: ["./dynamic-form.component.css"]
})
export class DynamicFormComponent implements OnInit {
  @Input() config: QuestionBase<any>[] = [];
  @Input() form: FormGroup;
  @Output() submitted = new EventEmitter<any>();

  constructor(
	private fb: FormBuilder,
	private dynamicFormService: DynamicFormService
  ) {}

  ngOnInit() {
	if (!this.form) {
		this.form = this.dynamicFormService.createFormGroup(this.config);
	}
  }
}
