import { TestBed } from '@angular/core/testing';

import { GetLecturersService } from './get-lecturers.service';

describe('GetLecturersService', () => {
  let service: GetLecturersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetLecturersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
