import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingGlossaryComponent } from './trading-glossary.component';

describe('TradingGlossaryComponent', () => {
  let component: TradingGlossaryComponent;
  let fixture: ComponentFixture<TradingGlossaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TradingGlossaryComponent]
    });
    fixture = TestBed.createComponent(TradingGlossaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
