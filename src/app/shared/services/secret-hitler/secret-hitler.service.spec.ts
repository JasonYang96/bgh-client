import { TestBed, inject } from '@angular/core/testing';

import { SecretHitlerService } from './secret-hitler.service';

describe('SecretHitlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecretHitlerService]
    });
  });

  it('should be created', inject([SecretHitlerService], (service: SecretHitlerService) => {
    expect(service).toBeTruthy();
  }));
});
