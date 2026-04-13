import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyCorrelationComponent } from './currency-correlation.component';

describe('CurrencyCorrelationComponent', () => {
  let component: CurrencyCorrelationComponent;
  let fixture: ComponentFixture<CurrencyCorrelationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrencyCorrelationComponent]
    });
    fixture = TestBed.createComponent(CurrencyCorrelationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
