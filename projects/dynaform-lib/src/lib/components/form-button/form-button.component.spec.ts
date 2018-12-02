import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { FormButtonComponent } from "./form-button.component";
import { DynaformLibModule } from "../../dynaform-lib.module";
import { FormButton } from "../../models/form-button.model";
import { FormGroup } from "@angular/forms";

describe("FormButtonComponent", () => {
  let component: FormButtonComponent;
  let fixture: ComponentFixture<FormButtonComponent>;

  beforeEach(async(() => {
	TestBed.configureTestingModule({
		imports: [DynaformLibModule]
	}).compileComponents();
  }));

  beforeEach(() => {
	fixture = TestBed.createComponent(FormButtonComponent);
	component = fixture.componentInstance;
	fixture.componentInstance.config = new FormButton({
		label: "Submit",
		controlType: "button",
		inputType: "submit",
		order: 5
	});
	fixture.componentInstance.group = new FormGroup({});
	fixture.detectChanges();
  });

  it("should create", () => {
	expect(component).toBeTruthy();
  });
});
