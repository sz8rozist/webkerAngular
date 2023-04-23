import { TestBed } from '@angular/core/testing';

import { TaborService } from './tabor.service';

describe('TaborService', () => {
  let service: TaborService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaborService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
