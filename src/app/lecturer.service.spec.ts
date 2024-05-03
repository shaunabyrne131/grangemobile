import { TestBed } from '@angular/core/testing';
import { LecturerService } from './lecturer.service';

describe('LecturerService', () => {
  let service: LecturerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LecturerService]
    });
    service = TestBed.inject(LecturerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch lecturer data', (done: DoneFn) => {
    service.fetchLecturerData().subscribe({
      next: (data) => {
        // Handle the data received from the HTTP request
        // For example, you could expect certain properties in the data
        expect(data).toBeTruthy();
        // Add more expectations as needed

        // Call done() to signal that the test is complete
        done();
      },
      error: (error) => {
        // Handle any errors
        console.error('Error fetching data:', error);
        // Call done() to signal that the test is complete
        done();
      }
    });
  });
});
