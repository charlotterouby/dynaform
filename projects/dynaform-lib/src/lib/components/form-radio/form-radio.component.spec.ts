import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRadioComponent } from './form-radio.component';
import { DynaformLibModule } from '../../dynaform-lib.module';
import { QuestionBase } from '../../models/question-base.model';
import { QuestionRadio } from '../../models/question-radio.model';
import { FormGroup, FormControl } from '@angular/forms';

describe('FormRadioComponent', () => {
	let component: FormRadioComponent;
	let fixture: ComponentFixture<FormRadioComponent>;

	const questions: QuestionBase<any>[] = [
		new QuestionRadio({
			name: 'hasEnemy',
			label: 'Do you have a mortal enemy ?',
			order: 4,
			options: [ { Code: 1, Libelle: 'Yes' }, { Code: 0, Libelle: 'No' } ],
			required: true
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
		fixture = TestBed.createComponent(FormRadioComponent);
		component = fixture.componentInstance;
		fixture.componentInstance.config = questions[0];
		fixture.componentInstance.group = new FormGroup({
			hasEnemy: new FormControl('')
		});
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
