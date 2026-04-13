import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationPartnersComponent } from './education-partners.component';

describe('EducationPartnersComponent', () => {
  let component: EducationPartnersComponent;
  let fixture: ComponentFixture<EducationPartnersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EducationPartnersComponent]
    });
    fixture = TestBed.createComponent(EducationPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
