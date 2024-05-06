import { TestBed } from '@angular/core/testing';

import { GetModulesService } from './get-modules.service';

describe('GetModulesService', () => {
  let service: GetModulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetModulesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
