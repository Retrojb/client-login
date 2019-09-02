import { TestBed } from '@angular/core/testing';

import { TempVendeeDataService } from './temp-vendee-data.service';

describe('TempVendeeDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TempVendeeDataService = TestBed.get(TempVendeeDataService);
    expect(service).toBeTruthy();
  });
});
