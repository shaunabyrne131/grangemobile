import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListModulesPage } from './list-modules.page';

describe('ListModulesPage', () => {
  let component: ListModulesPage;
  let fixture: ComponentFixture<ListModulesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListModulesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
