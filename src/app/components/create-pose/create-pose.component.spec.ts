import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePoseComponent } from './create-pose.component';

describe('CreatePoseComponent', () => {
  let component: CreatePoseComponent;
  let fixture: ComponentFixture<CreatePoseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePoseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
