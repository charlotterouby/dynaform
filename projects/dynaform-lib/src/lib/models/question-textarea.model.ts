import { QuestionBase } from './question-base.model';
import { DynamicFormService } from '../services/dynamic-form.service';
import { OptionsDefinition } from '../interfaces/questions.interface';

export class QuestionTextarea extends QuestionBase<string> {
	controlType = 'input';
	inputType: string;
	private dynamicFormService = new DynamicFormService();

	constructor(options: OptionsDefinition = {}) {
		super(options);
		this.validators = Array.isArray(options.validators)
			? [ this.dynamicFormService.validTextarea, ...options.validators ]
			: options.validators
				? [ this.dynamicFormService.validTextarea, options.validators ]
				: [ this.dynamicFormService.validTextarea ];
	}

	defaultGetMessageError(fieldCtrl) {
		if (fieldCtrl.hasError('required')) {
			return 'Information requise';
		}
		if (fieldCtrl.hasError('textInvalid')) {
			return 'Saisie incorrecte. Un ou plusieurs caractères non autorisés sont utilisés.';
		}
	}
}
