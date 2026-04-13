import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyFutureComponent } from './energy-future.component';

describe('EnergyFutureComponent', () => {
  let component: EnergyFutureComponent;
  let fixture: ComponentFixture<EnergyFutureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnergyFutureComponent]
    });
    fixture = TestBed.createComponent(EnergyFutureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
