import { Component } from "@angular/core";
import { QuestionService } from "./services/question.service";
import { QuestionBase } from "dynaform-lib";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "dynaform-lib-app";
  configForm: QuestionBase<any>[] = [];

  constructor(private questionService: QuestionService) {
	this.configForm = this.questionService.getQuestionsFoodForm();
  }

  formSubmitted(event) {
	console.log(event);
  }
}
