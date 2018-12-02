import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { FormSelectComponent } from "./form-select.component";
import { DynaformLibModule } from "../../dynaform-lib.module";
import { QuestionBase } from "../../models/question-base.model";
import { QuestionSelect } from "../../models/question-select.model";
import { FormGroup, FormControl } from "@angular/forms";

describe("FormSelectComponent", () => {
  let component: FormSelectComponent;
  let fixture: ComponentFixture<FormSelectComponent>;

  const questions: QuestionBase<any>[] = [
	new QuestionSelect({
		name: "brave",
		label: "Bravery Rating",
		optionsSelect: [
		{ code: "solid", libelle: "Solid" },
		{ code: "great", libelle: "Great" },
		{ code: "good", libelle: "Good" },
		{ code: "unproven", libelle: "Unproven" }
		],
		order: 3
	})
  ];

  beforeEach(async(() => {
	TestBed.configureTestingModule({
		imports: [DynaformLibModule]
	}).compileComponents();
  }));

  beforeEach(() => {
	fixture = TestBed.createComponent(FormSelectComponent);
	component = fixture.componentInstance;
	fixture.componentInstance.config = questions[0];
	fixture.componentInstance.group = new FormGroup({
		brave: new FormControl("")
	});
	fixture.detectChanges();
	fixture.detectChanges();
  });

  it("should create", () => {
	expect(component).toBeTruthy();
  });
});
