import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntiMoneyLaunderingComponent } from './anti-money-laundering.component';

describe('AntiMoneyLaunderingComponent', () => {
  let component: AntiMoneyLaunderingComponent;
  let fixture: ComponentFixture<AntiMoneyLaunderingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AntiMoneyLaunderingComponent]
    });
    fixture = TestBed.createComponent(AntiMoneyLaunderingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
