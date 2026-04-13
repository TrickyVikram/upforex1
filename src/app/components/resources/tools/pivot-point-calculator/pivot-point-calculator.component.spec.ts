import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PivotPointCalculatorComponent } from './pivot-point-calculator.component';

describe('PivotPointCalculatorComponent', () => {
  let component: PivotPointCalculatorComponent;
  let fixture: ComponentFixture<PivotPointCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PivotPointCalculatorComponent]
    });
    fixture = TestBed.createComponent(PivotPointCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
