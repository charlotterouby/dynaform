/**
 * CONFIGURATIONS COMMUNES DES ELEMENTS DE FORMULAIRE
 */
export interface MinimumConfigForm {
  controlType: string; // pour instancier le bon composant
  order: number; // pour le placer dans le bon ordre du formulaire
}

export interface MinimumConfigField extends MinimumConfigForm {
  label: string; // le libellé du champ
  name: string; // identifant pour le formGroup
  value?: any; // la valeur du champ
  validators?: ConfigValidator[]; // les critères de validation de la saisie
}

// Sous-objets de configuration
export interface ConfigValidator {
  name: string;
  param?: string | number;
  message?: string;
}

export interface OptionsSelect {
  code: string | number;
  libelle: string | number;
  order?: number;
}

export interface FullConfigOptions {
  controlType: string; // pour instancier le bon composant
  order: number; // pour le placer dans le bon ordre du formulaire
  label?: string; // le libellé du champ
  name?: string; // identifant pour le formGroup
  value?: any; // la valeur du champ
  validators?: ConfigValidator[]; // les critères de validation de la saisie
  inputType?: string;
  childrenFields?: MinimumConfigForm[];
  placeholder?: string;
  optionsSelect?: OptionsSelect[];
}

/**
 * CONFIGURATION DES CHAMPS DE FORMULAIRE
 */
export interface ConfigButtonForm extends MinimumConfigForm {
  inputType?: string; // type "submit" ou "button" --> defaut = "button"
  label?: string; // libellé du bouton --> defaut = "Enregistrer"
}
export interface ConfigSectionForm extends MinimumConfigForm {
  childrenFields: MinimumConfigForm[];
  label: string;
  name: string;
  validators?: ConfigValidator[]; // validateurs de la section --> default = []
}

export interface ConfigInputForm extends MinimumConfigField {
  inputType: string; // type "text" "number" "email" "phone" ...
  placeholder?: string;
}

export interface ConfigTextarea extends MinimumConfigField {
  placeholder?: string;
}

export interface ConfigRadioField extends MinimumConfigField {
  optionsSelect: OptionsSelect[];
}

export interface ConfigSelectField extends MinimumConfigField {
  placeholder?: string;
  optionsSelect?: OptionsSelect[];
}
