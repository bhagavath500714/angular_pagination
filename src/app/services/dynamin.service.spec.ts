import { TestBed, inject } from '@angular/core/testing';

import { DynaminService } from './dynamin.service';

describe('DynaminService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DynaminService]
    });
  });

  it('should be created', inject([DynaminService], (service: DynaminService) => {
    expect(service).toBeTruthy();
  }));
});
