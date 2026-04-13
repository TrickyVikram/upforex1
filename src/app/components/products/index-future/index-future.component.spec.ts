import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexFutureComponent } from './index-future.component';

describe('IndexFutureComponent', () => {
  let component: IndexFutureComponent;
  let fixture: ComponentFixture<IndexFutureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexFutureComponent]
    });
    fixture = TestBed.createComponent(IndexFutureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
