import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynaformLibComponent } from './dynaform-lib.component';

describe('DynaformLibComponent', () => {
  let component: DynaformLibComponent;
  let fixture: ComponentFixture<DynaformLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynaformLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynaformLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
