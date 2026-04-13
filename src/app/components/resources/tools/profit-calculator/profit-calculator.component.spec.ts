import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitCalculatorComponent } from './profit-calculator.component';

describe('ProfitCalculatorComponent', () => {
  let component: ProfitCalculatorComponent;
  let fixture: ComponentFixture<ProfitCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfitCalculatorComponent]
    });
    fixture = TestBed.createComponent(ProfitCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
