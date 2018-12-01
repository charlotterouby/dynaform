import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
	selector: 'dfl-form-textarea',
	templateUrl: './form-textarea.component.html',
	styleUrls: [ './form-textarea.component.css' ]
})
export class FormTextareaComponent {
	config;
	group: FormGroup;

	constructor() {}

	get inputControl() {
		return this.group.get(this.config.name) as FormControl;
	}
}
