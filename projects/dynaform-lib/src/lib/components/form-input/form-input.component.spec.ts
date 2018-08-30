import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInputComponent } from './form-input.component';
import { DynaformLibModule } from '../../dynaform-lib.module';
import { FormGroup, FormControl } from '@angular/forms';
import { QuestionInput } from '../../models/question-input.model';
import { QuestionBase } from '../../models/question-base.model';

describe('FormInputComponent', () => {
	let component: FormInputComponent;
	let fixture: ComponentFixture<FormInputComponent>;
	const questions: QuestionBase<any>[] = [
		new QuestionInput({
			name: 'firstName',
			label: 'First name',
			inputType: 'text',
			order: 1
		})
	];

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				imports: [ DynaformLibModule ]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(FormInputComponent);
		component = fixture.componentInstance;
		fixture.componentInstance.config = questions[0];
		fixture.componentInstance.group = new FormGroup({
			firstName: new FormControl('')
		});
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
