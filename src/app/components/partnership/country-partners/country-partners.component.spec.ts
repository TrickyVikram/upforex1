import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryPartnersComponent } from './country-partners.component';

describe('CountryPartnersComponent', () => {
  let component: CountryPartnersComponent;
  let fixture: ComponentFixture<CountryPartnersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountryPartnersComponent]
    });
    fixture = TestBed.createComponent(CountryPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
