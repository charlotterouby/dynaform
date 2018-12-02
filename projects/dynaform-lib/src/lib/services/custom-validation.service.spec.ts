import { TestBed } from "@angular/core/testing";
import { FormControl } from "@angular/forms";

import { CustomValidationService } from "./custom-validation.service";

describe("CustomValidationService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
	const service: CustomValidationService = TestBed.get(
		CustomValidationService
	);
	expect(service).toBeTruthy();
  });

  it("should valid Email Pattern", () => {
	const service: CustomValidationService = TestBed.get(
		CustomValidationService
	);
	const emailCtrl = new FormControl(null, [service.validEmailPattern]);

	const stringsToTest = [
		{
		email: "",
		expectedResult: true
		},
		{
		email: "charlotte.rouby@it-ce.fr",
		expectedResult: null
		},
		{
		email: "azzeerr",
		expectedResult: true
		},
		{
		email: "aze%zer@",
		expectedResult: true
		},
		{
		email: "charlotte1245@it-ce.bpce.fr",
		expectedResult: null
		}
	];
	stringsToTest.forEach(test => {
		emailCtrl.setValue(test.email);
		expect(emailCtrl.getError("email")).toBe(
		test.expectedResult,
		`Le test de validation du pattern email sur "${test.email}" a échoué.`
		);
	});
  });

  it("should valid Letters Only Patten", () => {
	const service: CustomValidationService = TestBed.get(
		CustomValidationService
	);
	const inputCtrl = new FormControl(null, [service.validLettersOnly]);

	const stringsToTest = [
		{
		value: "Marie-Thérèse",
		expectedResult: null
		},
		{
		value: "Charlotte",
		expectedResult: null
		},
		{
		value: "charlotte.rouby@it-ce.fr",
		expectedResult: true
		},
		{
		value: "aze%zer@",
		expectedResult: true
		},
		{
		value: "13274968",
		expectedResult: true
		},
		{
		value: "aaaa1327aaa4968aaaa",
		expectedResult: true
		}
	];
	stringsToTest.forEach(test => {
		inputCtrl.setValue(test.value);
		expect(inputCtrl.getError("lettersOnly")).toBe(
		test.expectedResult,
		`Le test de validation du pattern lettersOnly sur "${
			test.value
		}" a échoué.`
		);
	});
  });

  it("should valid Numbers Only Pattern", () => {
	const service: CustomValidationService = TestBed.get(
		CustomValidationService
	);
	const inputCtrl = new FormControl(null, [service.validNumbersOnly]);

	const stringsToTest = [
		{
		value: "Marie-Thérèse",
		expectedResult: true
		},
		{
		value: "Charlotte",
		expectedResult: true
		},
		{
		value: "charlotte.rouby@it-ce.fr",
		expectedResult: true
		},
		{
		value: "aze%zer@",
		expectedResult: true
		},
		{
		value: "13274968",
		expectedResult: null
		},
		{
		value: "aaaa1327aaa4968aaaa",
		expectedResult: true
		}
	];
	stringsToTest.forEach(test => {
		inputCtrl.setValue(test.value);
		expect(inputCtrl.getError("numbersOnly")).toBe(
		test.expectedResult,
		`Le test de validation du pattern numbersOnly sur "${
			test.value
		}" a échoué.`
		);
	});
  });

  it("should valid textarea Pattern", () => {
	const service: CustomValidationService = TestBed.get(
		CustomValidationService
	);
	const inputCtrl = new FormControl(null, [service.validTextarea]);

	const stringsToTest = [
		{
		value:
			"Marie-Thérèse \r Charlotte \r charlotte.rouby@it-ce.fr \r 06.21.65.77.27",
		expectedResult: false
		},
		{
		value:
			"Marie-Thérèse \r <div>contenu dangereux</div> \r Charlotte \r charlotte.rouby@it-ce.fr \r 06.21.65.77.27",
		expectedResult: true
		}
	];
	stringsToTest.forEach(test => {
		inputCtrl.setValue(test.value);
		expect(inputCtrl.getError("textInvalid")).toBe(
		test.expectedResult,
		`Le test de validation du pattern textarea sur "${
			test.value
		}" a échoué.`
		);
	});
  });

  it("should valid Phone Number Pattern", () => {
	const service: CustomValidationService = TestBed.get(
		CustomValidationService
	);
	const inputCtrl = new FormControl(null, [service.validPhoneNumber]);

	const stringsToTest = [
		{
		value: "Marie-Thérèse",
		expectedResult: true
		},
		{
		value: "Charlotte",
		expectedResult: true
		},
		{
		value: "06745@45.fr",
		expectedResult: true
		},
		{
		value: "1327496845",
		expectedResult: true
		},
		{
		value: "06 21 45 45 45",
		expectedResult: null
		},
		{
		value: "0421454545",
		expectedResult: null
		}
	];
	stringsToTest.forEach(test => {
		inputCtrl.setValue(test.value);
		expect(inputCtrl.getError("phoneNumber")).toBe(
		test.expectedResult,
		`Le test de validation du pattern phoneNumber sur "${
			test.value
		}" a échoué.`
		);
	});
  });
});
