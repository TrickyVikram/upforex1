import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingRulesComponent } from './trading-rules.component';

describe('TradingRulesComponent', () => {
  let component: TradingRulesComponent;
  let fixture: ComponentFixture<TradingRulesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TradingRulesComponent]
    });
    fixture = TestBed.createComponent(TradingRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
