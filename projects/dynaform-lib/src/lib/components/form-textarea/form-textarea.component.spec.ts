import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { DynaformLibModule } from "../../dynaform-lib.module";
import { FormTextareaComponent } from "./form-textarea.component";
import { QuestionTextarea } from "../../models/question-textarea.model";
import { QuestionBase } from "../../models/question-base.model";
import { FormGroup, FormControl } from "@angular/forms";

describe("FormTextareaComponent", () => {
  let component: FormTextareaComponent;
  let fixture: ComponentFixture<FormTextareaComponent>;

  const questions: QuestionBase<any>[] = [
  	new QuestionTextarea({
  		name: "monTextarea",
  		label: "Description",
  		inputType: "text",
  		order: 1
  	})
  ];

  beforeEach(async(() => {
  	TestBed.configureTestingModule({
  		imports: [DynaformLibModule]
  	}).compileComponents();
  }));

  beforeEach(() => {
  	fixture = TestBed.createComponent(FormTextareaComponent);
  	component = fixture.componentInstance;
  	fixture.componentInstance.config = questions[0];
  	fixture.componentInstance.group = new FormGroup({
  		monTextarea: new FormControl("")
  	});
	  fixture.detectChanges();
  });

  it("should create", () => {
	  expect(component).toBeTruthy();
  });
});
