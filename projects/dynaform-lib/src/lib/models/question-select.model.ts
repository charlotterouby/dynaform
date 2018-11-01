import { QuestionBase } from './question-base.model';

export class QuestionSelect extends QuestionBase<string> {
	controlType = 'select';
	options: { key: string; value: string }[] = [];

	constructor(options: {} = {}) {
		super(options);
		this.options = options['options'] || [];
	}
}
