import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OngoingAssessmentComponent } from './ongoing-assessment.component';

describe('OngoingAssessmentComponent', () => {
  let component: OngoingAssessmentComponent;
  let fixture: ComponentFixture<OngoingAssessmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OngoingAssessmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OngoingAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
