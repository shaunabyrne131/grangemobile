import { TestBed } from '@angular/core/testing';

import { DeleteStudentsService } from './delete-students.service';

describe('DeleteStudentsService', () => {
  let service: DeleteStudentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteStudentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
