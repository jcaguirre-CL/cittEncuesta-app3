import { TestBed, inject } from '@angular/core/testing';

import { CittService } from './citt.service';

describe('CittService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CittService]
    });
  });

  it('should be created', inject([CittService], (service: CittService) => {
    expect(service).toBeTruthy();
  }));
});
