import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExperienceTypewriterComponent } from './work-experience-typewriter.component';

describe('WorkExperienceTypewriterComponent', () => {
  let component: WorkExperienceTypewriterComponent;
  let fixture: ComponentFixture<WorkExperienceTypewriterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkExperienceTypewriterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkExperienceTypewriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
