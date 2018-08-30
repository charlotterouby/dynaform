import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {
	MatButtonModule,
	MatFormFieldModule,
	MatSelectModule,
	MatInputModule,
	MatRadioModule
} from '@angular/material';

import { DynamicFormComponent } from './containers/dynamic-form/dynamic-form.component';
import { DynamicFieldDirective } from './containers/dynamic-field/dynamic-field.directive';

import { FormInputComponent } from './components/form-input/form-input.component';
import { FormSelectComponent } from './components/form-select/form-select.component';
import { FormButtonComponent } from './components/form-button/form-button.component';
import { FormRadioComponent } from './components/form-radio/form-radio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule,
		MatButtonModule,
		MatFormFieldModule,
		MatSelectModule,
		MatInputModule,
		MatRadioModule,
		BrowserAnimationsModule
	],
	declarations: [
		// containers
		DynamicFormComponent,
		DynamicFieldDirective,
		// entry components
		FormInputComponent,
		FormSelectComponent,
		FormButtonComponent,
		FormRadioComponent
	],
	entryComponents: [
		FormButtonComponent,
		FormInputComponent,
		FormSelectComponent,
		FormRadioComponent
	],
	exports: [
		DynamicFormComponent
	]
})
export class DynaformLibModule {}
