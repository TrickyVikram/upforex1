import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSpecificationsComponent } from './contact-specifications.component';

describe('ContactSpecificationsComponent', () => {
  let component: ContactSpecificationsComponent;
  let fixture: ComponentFixture<ContactSpecificationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactSpecificationsComponent]
    });
    fixture = TestBed.createComponent(ContactSpecificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
