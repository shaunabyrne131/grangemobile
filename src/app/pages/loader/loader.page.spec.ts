import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoaderPage } from './loader.page';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('LoaderPage', () => {
  let component: LoaderPage;
  let fixture: ComponentFixture<LoaderPage>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoaderPage],
      imports: [RouterTestingModule] 
    }).compileComponents();

    fixture = TestBed.createComponent(LoaderPage);
    component = fixture.componentInstance;
    router = TestBed.inject(Router); // Inject Router
    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to login page after load', () => {
    spyOn(router, 'navigateByUrl'); // Spy on router navigateByUrl method

    // Call ngOnInit to trigger the loading process
    component.ngOnInit();

    // Check if router navigation method was called with the login page URL
    expect(router.navigateByUrl).toHaveBeenCalledWith('/login');
  });
});
