import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroToForexComponent } from './intro-to-forex.component';

describe('IntroToForexComponent', () => {
  let component: IntroToForexComponent;
  let fixture: ComponentFixture<IntroToForexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntroToForexComponent]
    });
    fixture = TestBed.createComponent(IntroToForexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
