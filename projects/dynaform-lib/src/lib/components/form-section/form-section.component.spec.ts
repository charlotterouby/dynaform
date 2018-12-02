import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormGroup, FormControl } from "@angular/forms";
import { DynaformLibModule } from "../../dynaform-lib.module";
import { FormSectionComponent } from "./form-section.component";
import { questionsFoodForm } from "../../../../../../src/app/models/questions.mock";

describe("FormSectionComponent", () => {
  let component: FormSectionComponent;
  let fixture: ComponentFixture<FormSectionComponent>;

  beforeEach(async(() => {
	TestBed.configureTestingModule({
		imports: [DynaformLibModule]
	}).compileComponents();
  }));

  beforeEach(() => {
  	fixture = TestBed.createComponent(FormSectionComponent);
  	component = fixture.componentInstance;
  	component.config = questionsFoodForm[2];
  	component.group = new FormGroup({
  		favouriteFood: new FormGroup({
  		  food: new FormControl("")
  		})
  	});
  	fixture.detectChanges();
  });

  it("should create", () => {
	  expect(component).toBeTruthy();
  });
});
