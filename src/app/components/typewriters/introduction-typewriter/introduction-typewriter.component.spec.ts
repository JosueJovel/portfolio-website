import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionTypewriterComponent } from './introduction-typewriter.component';

describe('IntroductionTypewriterComponent', () => {
  let component: IntroductionTypewriterComponent;
  let fixture: ComponentFixture<IntroductionTypewriterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IntroductionTypewriterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroductionTypewriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
