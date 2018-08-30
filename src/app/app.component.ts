import { Component } from '@angular/core';
import { QuestionService } from './services/question.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	title = 'dynaform-lib-app';
	configForm: Array<Object> = [];

	constructor(private questionService: QuestionService) {
		this.configForm = this.questionService.getQuestionsFoodForm();
	}

	formSubmitted(event) {
		console.log(event);
	}
}
