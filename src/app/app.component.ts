import { Component } from "@angular/core";
import { QuestionService } from "./services/question.service";
import { FullConfigOptions } from "dynaform-lib";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "dynaform-lib-app";
  configForm: FullConfigOptions[] = [];

  constructor(private questionService: QuestionService) {
	this.configForm = this.questionService.getQuestionsFoodForm();
  }

  formSubmitted(event) {
	console.log(event);
  }
}
