import { TestBed } from '@angular/core/testing';

import { UpdateStudentsService } from './update-students.service';

describe('UpdateStudentsService', () => {
  let service: UpdateStudentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateStudentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
