import { QuestionBase } from './question-base.model';

export class FormButton extends QuestionBase<string> {
	controlType = 'button';
	inputType: string;

	constructor(options: {} = {}) {
		super(options);
		this.inputType = options['inputType'] || 'button';
	}
}
