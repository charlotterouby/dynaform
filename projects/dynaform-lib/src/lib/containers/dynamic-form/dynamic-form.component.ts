import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DynamicFormService } from "../../services/dynamic-form.service";
import { FullConfigOptions } from "../../interfaces/questions.interface";

@Component({
  selector: "dfl-dynamic-form",
  templateUrl: "./dynamic-form.component.html",
  styleUrls: ["./dynamic-form.component.css"]
})
export class DynamicFormComponent implements OnInit {
  @Input() config: FullConfigOptions[] = [];
  @Input() form: FormGroup;
  @Output() submitted = new EventEmitter<any>();

  constructor(private dynamicFormService: DynamicFormService) {}

  ngOnInit() {
  	if (!this.form) {
  		this.form = this.dynamicFormService.createFormGroup(this.config);
  	}
  }
}
