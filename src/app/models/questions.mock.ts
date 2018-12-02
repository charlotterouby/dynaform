import {
	QuestionSelect,
	QuestionInput,
	QuestionRadio,
	FormButton,
	FormSection,
	FullConfigOptions
} from "dynaform-lib";

export const questionsHeroJob: FullConfigOptions[] = [
	new QuestionInput({
		controlType: "",
		inputType: "text",
		name: "firstName",
		label: "First name",
		value: "Bombasto",
		validators: [{ name: "required" }],
		order: 1
	}),
	new QuestionInput({
		controlType: "",
		name: "emailAddress",
		label: "Email",
		placeholder: "Ex : myname@mydomain.fr",
		inputType: "email",
		order: 2,
		validators: [{ name: "required" }, { name: "validEmailPattern" }]
	}),
	new QuestionSelect({
		controlType: "",
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
		controlType: "",
		name: "hasEnemy",
		label: "Do you have a mortal enemy ?",
		order: 4,
		optionsSelect: [{ code: 1, libelle: "Yes" }, { code: 0, libelle: "No" }],
		validators: [{ name: "required" }]
	}),
	new FormButton({
		label: "Submit",
		controlType: "button",
		inputType: "submit",
		order: 5
	})
];

export const questionFavouriteFood = new QuestionSelect({
	controlType: "",
	order: 1,
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
	validators: [{ name: "required" }]
});

export const questionsFoodForm: FullConfigOptions[] = [
	new QuestionInput({
		controlType: "",
		inputType: "text",
		label: "Full name",
		name: "name",
		placeholder: "Enter your name",
		order: 1,
		validators: [{ name: "required" }, { name: "minLength", param: 3 }, { name: "maxLength", param: 25 }]
	}),
	new QuestionRadio({
		controlType: "",
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
		validators: [{name: "required"}]
	}),
	new FormSection({
		controlType: "",
		label: "Vos aliments préférés",
		name: "favouriteFood",
		order: 4,
		childrenFields: [questionFavouriteFood]
	}),
	new FormSection({
		controlType: "",
		label: "Hero Job Form",
		name: "heroJobSection",
		order: 2,
		childrenFields: questionsHeroJob.filter(
			question => question.controlType !== "button"
		)
	}),
	new FormButton({
		controlType: "",
		label: "Envoyer le formulaire",
		order: 5,
		inputType: "submit"
	})
];
