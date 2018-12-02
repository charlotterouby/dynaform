import { DynamicFieldDirective } from "./dynamic-field.directive";
import { TestBed, inject } from "@angular/core/testing";
import { ComponentFactoryResolver, ViewContainerRef } from "@angular/core";

describe("DynamicFieldDirective", () => {
  beforeEach(() => {
	TestBed.configureTestingModule({
		providers: [ComponentFactoryResolver, ViewContainerRef]
	});
  });

  it("should create an instance", inject(
	[ComponentFactoryResolver, ViewContainerRef],
	(resolver: ComponentFactoryResolver, container: ViewContainerRef) => {
		expect(resolver).toBeTruthy();
		expect(container).toBeTruthy();
		const directive = new DynamicFieldDirective(resolver, container);
		expect(directive).toBeTruthy();
	}
  ));
});
