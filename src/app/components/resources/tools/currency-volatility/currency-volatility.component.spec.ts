import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyVolatilityComponent } from './currency-volatility.component';

describe('CurrencyVolatilityComponent', () => {
  let component: CurrencyVolatilityComponent;
  let fixture: ComponentFixture<CurrencyVolatilityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrencyVolatilityComponent]
    });
    fixture = TestBed.createComponent(CurrencyVolatilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
