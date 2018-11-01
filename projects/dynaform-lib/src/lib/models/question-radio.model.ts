import { QuestionBase } from './question-base.model';

export class QuestionRadio extends QuestionBase<string> {
	controlType = 'radio';
	options: { key: string; value: string }[] = [];

	constructor(options: {} = {}) {
		super(options);
		this.options = options['options'] || [];
	}
}
