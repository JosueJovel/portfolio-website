import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostWorkTypewriterComponent } from './post-work-typewriter.component';

describe('PostWorkTypewriterComponent', () => {
  let component: PostWorkTypewriterComponent;
  let fixture: ComponentFixture<PostWorkTypewriterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostWorkTypewriterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostWorkTypewriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
