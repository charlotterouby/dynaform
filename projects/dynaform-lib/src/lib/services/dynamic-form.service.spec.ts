import { TestBed, inject } from '@angular/core/testing';

import { DynamicFormService } from './dynamic-form.service';
import { QuestionBase } from '../models/question-base.model';
import { QuestionInput } from '../models/question-input.model';
import { Validators } from '@angular/forms';
import { FormButton } from '../models/form-button.model';
import { QuestionTextarea } from '../models/question-textarea.model';

describe('DynamicFormService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [ DynamicFormService ]
		});
	});

	it(
		'should be created',
		inject([ DynamicFormService ], (service: DynamicFormService) => {
			expect(service).toBeTruthy();
		})
	);

	it(
		'should create a FormGroup',
		inject([ DynamicFormService ], (service: DynamicFormService) => {
			const questions: QuestionBase<any>[] = [
				new QuestionInput({
					name: 'firstName',
					label: 'First name',
					inputType: 'text',
					validators: Validators.required,
					order: 1
				}),
				new FormButton({
					label: 'Submit',
					name: 'submit',
					controlType: 'button',
					inputType: 'submit',
					order: 5
				})
			];

			const form = service.toFormGroup(questions);

			expect(form).toBeDefined(
				'toFormGroup devrait retourner une valeur'
			);
			expect(form.get('firstName')).not.toBeNull(
				'form devrait avoir un champ `firstName`'
			);
			expect(form.get('firstName').getError('required')).toBe(
				true,
				'Le champ `firstName` devrait être requis'
			);
			expect(form.get('submit')).toBeNull(
				'form ne devrait pas avoir de champ `submit`'
			);
		})
	);

	it(
		'should valid Email Pattern',
		inject([ DynamicFormService ], (service: DynamicFormService) => {
			const questions: QuestionBase<any>[] = [
				new QuestionInput({
					name: 'emailAddress',
					label: 'Email',
					inputType: 'email',
					validators: service.validEmailPattern
				})
			];
			const form = service.toFormGroup(questions);
			const emailCtrl = form.get('emailAddress');

			const stringsToTest = [
				{
					email: '',
					expectedResult: true
				},
				{
					email: 'charlotte.rouby@it-ce.fr',
					expectedResult: null
				},
				{
					email: 'azzeerr',
					expectedResult: true
				},
				{
					email: 'aze%zer@',
					expectedResult: true
				},
				{
					email: 'charlotte1245@it-ce.bpce.fr',
					expectedResult: null
				}
			];

			stringsToTest.forEach((test) => {
				emailCtrl.setValue(test.email);
				expect(emailCtrl.getError('email')).toBe(
					test.expectedResult,
					`Le test de validation du pattern email sur "${test.email}" a échoué.`
				);
			});
		})
	);

	it(
		'should valid Letters Only Patten',
		inject([ DynamicFormService ], (service: DynamicFormService) => {
			const questions: QuestionBase<any>[] = [
				new QuestionInput({
					name: 'firstName',
					label: 'First name',
					inputType: 'text',
					validators: service.validLettersOnly
				})
			];
			const form = service.toFormGroup(questions);
			const inputCtrl = form.get('firstName');

			const stringsToTest = [
				{
					value: 'Marie-Thérèse',
					expectedResult: null
				},
				{
					value: 'Charlotte',
					expectedResult: null
				},
				{
					value: 'charlotte.rouby@it-ce.fr',
					expectedResult: true
				},
				{
					value: 'aze%zer@',
					expectedResult: true
				},
				{
					value: '13274968',
					expectedResult: true
				},
				{
					value: 'aaaa1327aaa4968aaaa',
					expectedResult: true
				}
			];

			stringsToTest.forEach((test) => {
				inputCtrl.setValue(test.value);
				expect(inputCtrl.getError('lettersOnly')).toBe(
					test.expectedResult,
					`Le test de validation du pattern lettersOnly sur "${test.value}" a échoué.`
				);
			});
		})
	);

	it(
		'should valid Numbers Only Pattern',
		inject([ DynamicFormService ], (service: DynamicFormService) => {
			const questions: QuestionBase<any>[] = [
				new QuestionInput({
					name: 'numContrat',
					label: 'nuumero de contrat',
					inputType: 'number',
					validators: service.validNumbersOnly
				})
			];
			const form = service.toFormGroup(questions);
			const inputCtrl = form.get('numContrat');

			const stringsToTest = [
				{
					value: 'Marie-Thérèse',
					expectedResult: true
				},
				{
					value: 'Charlotte',
					expectedResult: true
				},
				{
					value: 'charlotte.rouby@it-ce.fr',
					expectedResult: true
				},
				{
					value: 'aze%zer@',
					expectedResult: true
				},
				{
					value: '13274968',
					expectedResult: null
				},
				{
					value: 'aaaa1327aaa4968aaaa',
					expectedResult: true
				}
			];

			stringsToTest.forEach((test) => {
				inputCtrl.setValue(test.value);
				expect(inputCtrl.getError('numbersOnly')).toBe(
					test.expectedResult,
					`Le test de validation du pattern numbersOnly sur "${test.value}" a échoué.`
				);
			});
		})
	);
	it(
		'should valid textarea Pattern',
		inject([ DynamicFormService ], (service: DynamicFormService) => {
			const questions: QuestionBase<any>[] = [
				new QuestionTextarea({
					name: 'myText',
					label: 'question libre'
				})
			];
			const form = service.toFormGroup(questions);
			const inputCtrl = form.get('myText');

			const stringsToTest = [
				{
					value: 'Marie-Thérèse \r Charlotte \r charlotte.rouby@it-ce.fr \r 06.21.65.77.27',
					expectedResult: false
				},
				{
					value: 'Marie-Thérèse \r <div>contenu dangereux</div> \r Charlotte \r charlotte.rouby@it-ce.fr \r 06.21.65.77.27',
					expectedResult: true
				}
			];

			stringsToTest.forEach((test) => {
				inputCtrl.setValue(test.value);
				expect(inputCtrl.getError('textInvalid')).toBe(
					test.expectedResult,
					`Le test de validation du pattern textarea sur "${test.value}" a échoué.`
				);
			});
		})
	);

	it(
		'should valid Phone Number Pattern',
		inject([ DynamicFormService ], (service: DynamicFormService) => {
			const questions: QuestionBase<any>[] = [
				new QuestionInput({
					name: 'phone',
					label: 'phone',
					inputType: 'text',
					validators: service.validPhoneNumber
				})
			];
			const form = service.toFormGroup(questions);
			const inputCtrl = form.get('phone');

			const stringsToTest = [
				{
					value: 'Marie-Thérèse',
					expectedResult: true
				},
				{
					value: 'Charlotte',
					expectedResult: true
				},
				{
					value: '06745@45.fr',
					expectedResult: true
				},
				{
					value: '1327496845',
					expectedResult: true
				},
				{
					value: '06 21 45 45 45',
					expectedResult: null
				},
				{
					value: '0421454545',
					expectedResult: null
				}
			];

			stringsToTest.forEach((test) => {
				inputCtrl.setValue(test.value);
				expect(inputCtrl.getError('phoneNumber')).toBe(
					test.expectedResult,
					`Le test de validation du pattern phoneNumber sur "${test.value}" a échoué.`
				);
			});
		})
	);
});
