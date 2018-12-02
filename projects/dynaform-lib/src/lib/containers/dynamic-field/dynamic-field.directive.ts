import {
  Directive,
  Input,
  ComponentFactoryResolver,
  ViewContainerRef,
  OnInit
} from "@angular/core";
import { FormGroup } from "@angular/forms";

import { FormButtonComponent } from "../../components/form-button/form-button.component";
import { FormInputComponent } from "../../components/form-input/form-input.component";
import { FormRadioComponent } from "../../components/form-radio/form-radio.component";
import { FormSectionComponent } from "../../components/form-section/form-section.component";
import { FormSelectComponent } from "../../components/form-select/form-select.component";
import { FormTextareaComponent } from "../../components/form-textarea/form-textarea.component";
import { FullConfigOptions } from "../../interfaces/questions.interface";

const components = {
  input: FormInputComponent,
  select: FormSelectComponent,
  radio: FormRadioComponent,
  button: FormButtonComponent,
  section: FormSectionComponent,
  textarea: FormTextareaComponent
};

@Directive({
  selector: "[dflDynamicField]"
})
export class DynamicFieldDirective implements OnInit {
  @Input() config: FullConfigOptions;
  @Input() group: FormGroup;

  component;

  constructor(private resolver: ComponentFactoryResolver, private container: ViewContainerRef) { }

  ngOnInit() {
  	const component = components[this.config.controlType];
  	const factory = this.resolver.resolveComponentFactory<any>(component);
  	this.component = this.container.createComponent(factory);
  	this.component.instance.config = this.config;
  	this.component.instance.group = this.group;
  }
}
