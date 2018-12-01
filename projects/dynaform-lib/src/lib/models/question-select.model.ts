import { QuestionBase } from './question-base.model';
import { OptionsDefinition } from '../interfaces/questions.interface';

export class QuestionSelect extends QuestionBase<string> {
	controlType = 'select';
	options: { key: string; value: string }[] = [];

	constructor(options: OptionsDefinition = {}) {
		super(options);
		this.options = options['options'] || [];
	}
}
