import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaLearningComponent } from './meta-learning.component';

describe('MetaLearningComponent', () => {
  let component: MetaLearningComponent;
  let fixture: ComponentFixture<MetaLearningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetaLearningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
