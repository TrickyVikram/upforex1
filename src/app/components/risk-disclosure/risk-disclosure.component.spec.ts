import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskDisclosureComponent } from './risk-disclosure.component';

describe('RiskDisclosureComponent', () => {
  let component: RiskDisclosureComponent;
  let fixture: ComponentFixture<RiskDisclosureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RiskDisclosureComponent]
    });
    fixture = TestBed.createComponent(RiskDisclosureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
