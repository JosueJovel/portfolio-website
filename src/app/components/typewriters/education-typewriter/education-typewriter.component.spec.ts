import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationTypewriterComponent } from './education-typewriter.component';

describe('EducationTypewriterComponent', () => {
  let component: EducationTypewriterComponent;
  let fixture: ComponentFixture<EducationTypewriterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EducationTypewriterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationTypewriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
