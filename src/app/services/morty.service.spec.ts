import { TestBed } from '@angular/core/testing';

import { VendeeService } from './morty.service';

describe('VendeeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VendeeService = TestBed.get(VendeeService);
    expect(service).toBeTruthy();
  });
});
