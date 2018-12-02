import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { FormRadioComponent } from "./form-radio.component";
import { DynaformLibModule } from "../../dynaform-lib.module";
import { QuestionRadio } from "../../models/question-radio.model";
import { FormGroup, FormControl } from "@angular/forms";
import { FullConfigOptions } from "../../interfaces/questions.interface";

describe("FormRadioComponent", () => {
  let component: FormRadioComponent;
  let fixture: ComponentFixture<FormRadioComponent>;

  const questions: FullConfigOptions[] = [
	new QuestionRadio({
		controlType: "",
		name: "hasEnemy",
		label: "Do you have a mortal enemy ?",
		order: 4,
		optionsSelect: [{ code: 1, libelle: "Yes" }, { code: 0, libelle: "No" }],
		validators: [{name: "required"}]
	})
  ];

  beforeEach(async(() => {
	TestBed.configureTestingModule({
		imports: [DynaformLibModule]
	}).compileComponents();
  }));

  beforeEach(() => {
	fixture = TestBed.createComponent(FormRadioComponent);
	component = fixture.componentInstance;
	fixture.componentInstance.config = questions[0];
	fixture.componentInstance.group = new FormGroup({
		hasEnemy: new FormControl("")
	});
	fixture.detectChanges();
  });

  it("should create", () => {
	expect(component).toBeTruthy();
  });
});
