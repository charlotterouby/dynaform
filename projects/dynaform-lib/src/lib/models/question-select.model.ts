import { QuestionBase } from './question-base.model';
import { OptionsDefinition, OptionsSelect } from '../interfaces/questions.interface';

export class QuestionSelect extends QuestionBase<string> {
	controlType = 'select';
	optionsSelect: OptionsSelect[] = [];

	constructor(options: OptionsDefinition = {}) {
		super(options);
		this.optionsSelect = options['optionsSelect'] || [];
	}
}
