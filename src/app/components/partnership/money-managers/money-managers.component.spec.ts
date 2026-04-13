import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyManagersComponent } from './money-managers.component';

describe('MoneyManagersComponent', () => {
  let component: MoneyManagersComponent;
  let fixture: ComponentFixture<MoneyManagersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoneyManagersComponent]
    });
    fixture = TestBed.createComponent(MoneyManagersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
