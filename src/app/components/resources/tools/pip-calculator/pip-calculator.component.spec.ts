import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipCalculatorComponent } from './pip-calculator.component';

describe('PipCalculatorComponent', () => {
  let component: PipCalculatorComponent;
  let fixture: ComponentFixture<PipCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PipCalculatorComponent]
    });
    fixture = TestBed.createComponent(PipCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
