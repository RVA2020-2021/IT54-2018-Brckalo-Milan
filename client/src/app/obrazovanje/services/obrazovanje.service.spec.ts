import { TestBed } from '@angular/core/testing';

import { ObrazovanjeService } from './obrazovanje.service';

describe('ObrazovanjeService', () => {
  let service: ObrazovanjeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObrazovanjeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
