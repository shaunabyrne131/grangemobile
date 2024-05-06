import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DisplayLocationPage } from './display-location.page';

describe('DisplayLocationPage', () => {
  let component: DisplayLocationPage;
  let fixture: ComponentFixture<DisplayLocationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayLocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
