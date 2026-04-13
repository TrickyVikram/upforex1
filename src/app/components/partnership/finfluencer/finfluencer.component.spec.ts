import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinfluencerComponent } from './finfluencer.component';

describe('FinfluencerComponent', () => {
  let component: FinfluencerComponent;
  let fixture: ComponentFixture<FinfluencerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinfluencerComponent]
    });
    fixture = TestBed.createComponent(FinfluencerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
