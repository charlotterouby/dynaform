import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import {
  MatButtonModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatRadioModule
} from "@angular/material";

import { DynamicFormComponent } from "./containers/dynamic-form/dynamic-form.component";
import { DynamicFieldDirective } from "./containers/dynamic-field/dynamic-field.directive";

import { FormInputComponent } from "./components/form-input/form-input.component";
import { FormSelectComponent } from "./components/form-select/form-select.component";
import { FormButtonComponent } from "./components/form-button/form-button.component";
import { FormRadioComponent } from "./components/form-radio/form-radio.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormTextareaComponent } from "./components/form-textarea/form-textarea.component";
import { FormSectionComponent } from "./components/form-section/form-section.component";

@NgModule({
  imports: [
	// modules angular
	CommonModule,
	BrowserAnimationsModule,
	ReactiveFormsModule,
	// modules material
	MatButtonModule,
	MatFormFieldModule,
	MatSelectModule,
	MatInputModule,
	MatRadioModule
  ],
  declarations: [
	// containers
	DynamicFormComponent,
	DynamicFieldDirective,
	// entry components
	FormInputComponent,
	FormSelectComponent,
	FormButtonComponent,
	FormRadioComponent,
	FormTextareaComponent,
	FormSectionComponent
  ],
  entryComponents: [
	FormInputComponent,
	FormSelectComponent,
	FormButtonComponent,
	FormRadioComponent,
	FormTextareaComponent,
	FormSectionComponent
  ],
  exports: [DynamicFormComponent]
})
export class DynaformLibModule {}
