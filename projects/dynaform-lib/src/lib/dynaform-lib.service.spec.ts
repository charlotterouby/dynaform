import { TestBed, inject } from '@angular/core/testing';

import { DynaformLibService } from './dynaform-lib.service';

describe('DynaformLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DynaformLibService]
    });
  });

  it('should be created', inject([DynaformLibService], (service: DynaformLibService) => {
    expect(service).toBeTruthy();
  }));
});
