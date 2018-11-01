import {
	Directive,
	Input,
	ComponentFactoryResolver,
	ViewContainerRef,
	OnInit
} from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormButtonComponent } from '../../components/form-button/form-button.component';
import { FormInputComponent } from '../../components/form-input/form-input.component';
import { FormSelectComponent } from '../../components/form-select/form-select.component';
import { QuestionBase } from '../../models/question-base.model';
import { FormRadioComponent } from '../../components/form-radio/form-radio.component';

const components = {
	input: FormInputComponent,
	select: FormSelectComponent,
	radio: FormRadioComponent,
	button: FormButtonComponent
};

@Directive({
	selector: '[dflDynamicField]'
})
export class DynamicFieldDirective implements OnInit {
	@Input() config: QuestionBase<any>;
	@Input() group: FormGroup;

	component;

	constructor(
		private resolver: ComponentFactoryResolver,
		private container: ViewContainerRef
	) {}

	ngOnInit() {
		const component = components[this.config.controlType];
		const factory = this.resolver.resolveComponentFactory<any>(component);
		this.component = this.container.createComponent(factory);
		this.component.instance.config = this.config;
		this.component.instance.group = this.group;
	}
}
