import { TestBed } from '@angular/core/testing';

import { PreventUnsavedChnagesGuard } from './prevent-unsaved-chnages.guard';

describe('PreventUnsavedChnagesGuard', () => {
  let guard: PreventUnsavedChnagesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PreventUnsavedChnagesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
