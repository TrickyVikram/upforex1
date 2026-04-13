import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpforexAgentComponent } from './upforex-agent.component';

describe('UpforexAgentComponent', () => {
  let component: UpforexAgentComponent;
  let fixture: ComponentFixture<UpforexAgentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpforexAgentComponent]
    });
    fixture = TestBed.createComponent(UpforexAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
