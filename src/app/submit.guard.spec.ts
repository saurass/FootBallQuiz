import { TestBed, async, inject } from '@angular/core/testing';

import { SubmitGuard } from './submit.guard';

describe('SubmitGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubmitGuard]
    });
  });

  it('should ...', inject([SubmitGuard], (guard: SubmitGuard) => {
    expect(guard).toBeTruthy();
  }));
});
