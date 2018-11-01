import { QuestionBase } from './question-base.model';

export class QuestionInput extends QuestionBase<string> {
	controlType = 'input';
	inputType: string;

	constructor(options: {} = {}) {
		super(options);
		this.inputType = options['inputType'] || 'text';
	}
}
