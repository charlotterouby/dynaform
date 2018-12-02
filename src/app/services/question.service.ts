import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";

import { Hero, heroes } from "../models/hero-data";
import {
  questionsHeroJob,
  questionsFoodForm,
  questionFavouriteFood
} from "../models/questions.mock";

@Injectable({
  providedIn: "root"
})
export class QuestionService {
  delayMs = 500;

  constructor() {}
  /***********************************************************
   *  For dynamicForm examples
   ***********************************************************/
  getQuestionsHeroJob() {
	return questionsHeroJob;
  }

  getQuestionsFoodForm() {
	return questionsFoodForm;
  }

  getQuestionFavouriteFood() {
	return questionFavouriteFood;
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
	const oldHero = heroes.find(h => h.id === hero.id);
	const newHero = Object.assign(oldHero, hero); // Demo: mutate cached hero
	return of(newHero).pipe(delay(this.delayMs)); // simulate latency with delay
  }
}
