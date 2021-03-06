import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { DynaformLibModule } from "dynaform-lib";
describe("AppComponent", () => {
  beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AppComponent],
			imports: [DynaformLibModule]
		}).compileComponents();
	}));

  it("should create the app", async(() => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	}));

  it(`should have as title 'dynaform-lib-app'`, async(() => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app.title).toEqual("dynaform-lib-app");
	}));

  it("should render title in a h1 tag", async(() => {
		const fixture = TestBed.createComponent(AppComponent);
		fixture.detectChanges();
		const compiled = fixture.debugElement.nativeElement;
		expect(compiled.querySelector("h1").textContent).toContain(
			"Welcome to dynaform-lib-app!"
		);
  }));
});
