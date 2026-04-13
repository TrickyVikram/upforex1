import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialTradingComponent } from './social-trading.component';

describe('SocialTradingComponent', () => {
  let component: SocialTradingComponent;
  let fixture: ComponentFixture<SocialTradingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocialTradingComponent]
    });
    fixture = TestBed.createComponent(SocialTradingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
