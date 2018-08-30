import { Injectable } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { Hero, heroes } from '../models/hero-data';
import {
	QuestionBase,
	QuestionSelect,
	QuestionInput,
	QuestionRadio,
	FormButton,
	DynamicFormService
} from 'dynaform-lib';

@Injectable({
	providedIn: 'root'
})
export class QuestionService {
	delayMs = 500;

	constructor(private dynamicFormService: DynamicFormService) {}
	/***********************************************************
	 *  For dynamicForm examples
	 ***********************************************************/
	getQuestionsHeroJob() {
		const questions: QuestionBase<any>[] = [
			new QuestionInput({
				name: 'firstName',
				label: 'First name',
				value: 'Bombasto',
				required: true,
				order: 1
			}),
			new QuestionInput({
				name: 'emailAddress',
				label: 'Email',
				placeholder: 'Ex : myname@mydomain.fr',
				inputType: 'email',
				order: 2,
				validators: [ Validators.required, this.dynamicFormService.validEmailPattern ],
				getMessageError: (fieldCtrl: FormControl) => {
					if (fieldCtrl.hasError('required')) {
						return 'Information requise';
					}
					if (fieldCtrl.hasError('email')) {
						return 'Adresse mail non valide';
					}
				}
			}),
			new QuestionSelect({
				name: 'brave',
				label: 'Bravery Rating',
				options: [
					{ Code: 'solid', Libelle: 'Solid' },
					{ Code: 'great', Libelle: 'Great' },
					{ Code: 'good', Libelle: 'Good' },
					{ Code: 'unproven', Libelle: 'Unproven' }
				],
				order: 3
			}),
			new QuestionRadio({
				name: 'hasEnemy',
				label: 'Do you have a mortal enemy ?',
				order: 4,
				options: [ { Code: 1, Libelle: 'Yes' }, { Code: 0, Libelle: 'No' } ],
				required: true
			}),
			new FormButton({
				label: 'Submit',
				name: 'submit',
				controlType: 'button',
				inputType: 'submit',
				order: 5
			})
		];

		return questions.sort((a, b) => a.order - b.order);
	}

	getQuestionsFoodForm() {
		const questions: Array<QuestionBase<any>> = [
			new QuestionInput({
				controlType: 'input',
				label: 'Full name',
				name: 'name',
				placeholder: 'Enter your name',
				validators: [ Validators.required, Validators.minLength(3), Validators.maxLength(25) ]
			}),
			new QuestionRadio({
				controlType: 'radio',
				label: 'do you have a favourite food ?',
				name: 'hasFavourite',
				options: [
					{
						Libelle: 'Yes',
						Code: 'Y'
					},
					{
						Libelle: 'No',
						Code: 'N'
					}
				],
				validators: Validators.required
			}),
			new FormButton({
				label: 'Submit',
				name: 'submit',
				controlType: 'button',
				inputType: 'submit'
			})
		];

		return questions;
	}

	getQuestionFavouriteFood() {
		return new QuestionSelect({
			controlType: 'select',
			label: 'Favourite food',
			name: 'food',
			options: [
				{
					Code: 'PIZ',
					Libelle: 'Pizza'
				},
				{
					Code: 'HDG',
					Libelle: 'Hot Dogs'
				},
				{
					Code: 'KNA',
					Libelle: 'Knakworstje'
				},
				{
					Code: 'COF',
					Libelle: 'Coffee'
				}
			],
			placeholder: 'Select an option',
			validators: Validators.required
		});
	}

	/***********************************************************
	 *  For Reactive Form example : Hero List / Hero Detail
	 ***********************************************************/

	// Fake server get; assume nothing can go wrong
	getHeroes(): Observable<Hero[]> {
		return of(heroes).pipe(delay(this.delayMs)); // simulate latency with delay
	}

	// Fake server update; assume nothing can go wrong
	updateHero(hero: Hero): Observable<Hero> {
		const oldHero = heroes.find((h) => h.id === hero.id);
		const newHero = Object.assign(oldHero, hero); // Demo: mutate cached hero
		return of(newHero).pipe(delay(this.delayMs)); // simulate latency with delay
	}
}
