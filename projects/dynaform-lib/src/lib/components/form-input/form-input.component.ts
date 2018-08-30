import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
	selector: 'dfl-form-input',
	styleUrls: ['./form-input.component.css'],
	templateUrl: './form-input.component.html'
})
export class FormInputComponent {
	config;
	group: FormGroup;

	constructor() { }

	get inputControl () {
		return this.group.get(this.config.name) as FormControl;
	}

}
