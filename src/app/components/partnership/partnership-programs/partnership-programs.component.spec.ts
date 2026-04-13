import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnershipProgramsComponent } from './partnership-programs.component';

describe('PartnershipProgramsComponent', () => {
  let component: PartnershipProgramsComponent;
  let fixture: ComponentFixture<PartnershipProgramsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartnershipProgramsComponent]
    });
    fixture = TestBed.createComponent(PartnershipProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
