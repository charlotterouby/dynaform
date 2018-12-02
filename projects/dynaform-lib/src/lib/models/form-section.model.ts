import { QuestionBase } from './question-base.model';
import { OptionsDefinition } from '../interfaces/questions.interface';

export class FormSection extends QuestionBase<any> {
	controlType = 'section';
	/** @required */
	childrenFields: QuestionBase<any>[];

	constructor(options: OptionsDefinition = {}) {
		super(options);
	}
}
