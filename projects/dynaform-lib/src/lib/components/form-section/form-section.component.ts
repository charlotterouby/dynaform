import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
	selector: 'dfl-form-section',
	templateUrl: './form-section.component.html',
	styleUrls: [ './form-section.component.css' ]
})
export class FormSectionComponent {

  config;
	group: FormGroup;

	constructor() {}

	get sectionFormGroup () {
		return this.group.get(this.config.name) as FormGroup;
	}
}
