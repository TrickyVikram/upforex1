import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoCfdComponent } from './crypto-cfd.component';

describe('CryptoCfdComponent', () => {
  let component: CryptoCfdComponent;
  let fixture: ComponentFixture<CryptoCfdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CryptoCfdComponent]
    });
    fixture = TestBed.createComponent(CryptoCfdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
