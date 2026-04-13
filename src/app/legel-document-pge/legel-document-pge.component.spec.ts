import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegelDocumentPgeComponent } from './legel-document-pge.component';

describe('LegelDocumentPgeComponent', () => {
  let component: LegelDocumentPgeComponent;
  let fixture: ComponentFixture<LegelDocumentPgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LegelDocumentPgeComponent]
    });
    fixture = TestBed.createComponent(LegelDocumentPgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
