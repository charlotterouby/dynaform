import { QuestionBase } from './question-base.model';
import { OptionsDefinition } from '../interfaces/questions.interface';

export class QuestionRadio extends QuestionBase<string> {
	controlType = 'radio';
	options: { key: string; value: string }[] = [];

	constructor(options: OptionsDefinition = {}) {
		super(options);
		this.options = options['options'] || [];
	}
}
