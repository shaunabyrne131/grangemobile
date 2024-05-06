import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListLecturersPage } from './list-lecturers.page';

describe('ListLecturersPage', () => {
  let component: ListLecturersPage;
  let fixture: ComponentFixture<ListLecturersPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLecturersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
