import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { FormInputComponent } from "./form-input.component";
import { DynaformLibModule } from "../../dynaform-lib.module";
import { FormGroup, FormControl } from "@angular/forms";
import { QuestionInput } from "../../models/question-input.model";
import { FullConfigOptions } from "../../interfaces/questions.interface";

describe("FormInputComponent", () => {
	let component: FormInputComponent;
	let fixture: ComponentFixture<FormInputComponent>;
	const questions: FullConfigOptions[] = [
		new QuestionInput({
			controlType: "",
			name: "firstName",
			label: "First name",
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
		fixture = TestBed.createComponent(FormInputComponent);
		component = fixture.componentInstance;
		component.config = questions[0];
		component.group = new FormGroup({
			firstName: new FormControl("")
		});
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
