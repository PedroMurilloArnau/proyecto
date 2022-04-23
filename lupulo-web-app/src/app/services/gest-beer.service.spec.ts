import { TestBed } from '@angular/core/testing';

import { GestBeerService } from './gest-beer.service';

describe('GestBeerService', () => {
  let service: GestBeerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestBeerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
