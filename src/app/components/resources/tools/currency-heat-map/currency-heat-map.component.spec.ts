import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyHeatMapComponent } from './currency-heat-map.component';

describe('CurrencyHeatMapComponent', () => {
  let component: CurrencyHeatMapComponent;
  let fixture: ComponentFixture<CurrencyHeatMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrencyHeatMapComponent]
    });
    fixture = TestBed.createComponent(CurrencyHeatMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
