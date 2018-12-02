import { FormControl } from "@angular/forms";
import {
  QuestionBase,
  QuestionSelect,
  QuestionInput,
  QuestionRadio,
  FormButton,
  FormSection
} from "dynaform-lib";

export const questionsHeroJob: QuestionBase<any>[] = [
  new QuestionInput({
	name: "firstName",
	label: "First name",
	value: "Bombasto",
	validators: ["required"],
	order: 1
  }),
  new QuestionInput({
	name: "emailAddress",
	label: "Email",
	placeholder: "Ex : myname@mydomain.fr",
	inputType: "email",
	order: 2,
	validators: ["required", "validEmailPattern"],
	getMessageError: (fieldCtrl: FormControl) => {
		if (fieldCtrl.hasError("required")) {
			return "Information requise";
		}
		if (fieldCtrl.hasError("email")) {
			return "Adresse mail non valide";
		}
	}
  }),
  new QuestionSelect({
	name: "brave",
	label: "Bravery Rating",
	optionsSelect: [
		{ code: "solid", libelle: "Solid" },
		{ code: "great", libelle: "Great" },
		{ code: "good", libelle: "Good" },
		{ code: "unproven", libelle: "Unproven" }
	],
	order: 3
  }),
  new QuestionRadio({
	name: "hasEnemy",
	label: "Do you have a mortal enemy ?",
	order: 4,
	optionsSelect: [{ code: 1, libelle: "Yes" }, { code: 0, libelle: "No" }],
	validators: ["required"]
  }),
  new FormButton({
	label: "Submit",
	name: "submit",
	controlType: "button",
	inputType: "submit",
	order: 5
  })
];

export const questionFavouriteFood = new QuestionSelect({
  label: "Favourite food",
  name: "food",
  optionsSelect: [
	{
		code: "PIZ",
		libelle: "Pizza"
	},
	{
		code: "HDG",
		libelle: "Hot Dogs"
	},
	{
		code: "KNA",
		libelle: "Knakworstje"
	},
	{
		code: "COF",
		libelle: "Coffee"
	}
  ],
  placeholder: "Select an option",
  validators: ["required"]
});

export const questionsFoodForm: QuestionBase<any>[] = [
  new QuestionInput({
	label: "Full name",
	name: "name",
	placeholder: "Enter your name",
	minLength: 3,
	maxLength: 25,
	order: 1,
	validators: ["required", "minLength", "maxLength"]
  }),
  new QuestionRadio({
	label: "Do you have a favourite food ?",
	name: "hasFavourite",
	order: 3,
	optionsSelect: [
		{
		libelle: "Yes",
		code: 1
		},
		{
		libelle: "No",
		code: 0
		}
	],
	validators: ["required"]
  }),
  new FormSection({
	label: "Vos aliments préférés",
	name: "favouriteFood",
	order: 4,
	childrenFields: [questionFavouriteFood]
  }),
  new FormSection({
	label: "Hero Job Form",
	name: "heroJobSection",
	order: 2,
	childrenFields: questionsHeroJob.filter(
		question => question.controlType !== "button"
	)
  }),
  new FormButton({
	label: "Envoyer le formulaire",
	order: 5,
	name: "submit",
	inputType: "submit"
  })
];
