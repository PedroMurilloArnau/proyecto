import { TestBed } from '@angular/core/testing';

import { Gest.DocumentService } from './gest.document.service';

describe('Gest.DocumentService', () => {
  let service: Gest.DocumentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Gest.DocumentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
