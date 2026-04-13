import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionalServiceComponent } from './institutional-service.component';

describe('InstitutionalServiceComponent', () => {
  let component: InstitutionalServiceComponent;
  let fixture: ComponentFixture<InstitutionalServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstitutionalServiceComponent]
    });
    fixture = TestBed.createComponent(InstitutionalServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
