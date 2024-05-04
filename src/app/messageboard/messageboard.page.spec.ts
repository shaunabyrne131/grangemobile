import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MessageboardPage } from './messageboard.page';

describe('MessageboardPage', () => {
  let component: MessageboardPage;
  let fixture: ComponentFixture<MessageboardPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
