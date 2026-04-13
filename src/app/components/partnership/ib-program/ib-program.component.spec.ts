import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IbProgramComponent } from './ib-program.component';

describe('IbProgramComponent', () => {
  let component: IbProgramComponent;
  let fixture: ComponentFixture<IbProgramComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IbProgramComponent]
    });
    fixture = TestBed.createComponent(IbProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
