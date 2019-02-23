import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunLearningComponent } from './run-learning.component';

describe('RunLearningComponent', () => {
  let component: RunLearningComponent;
  let fixture: ComponentFixture<RunLearningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunLearningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
