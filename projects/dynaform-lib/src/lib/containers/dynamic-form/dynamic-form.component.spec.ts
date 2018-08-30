import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormComponent } from './dynamic-form.component';
import { DynaformLibModule } from '../../dynaform-lib.module';

describe('DynamicFormComponent', () => {
	let component: DynamicFormComponent;
	let fixture: ComponentFixture<DynamicFormComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				imports: [ DynaformLibModule ]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(DynamicFormComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
