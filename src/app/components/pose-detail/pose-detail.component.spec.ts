import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoseDetailComponent } from './pose-detail.component';

describe('PoseDetailComponent', () => {
  let component: PoseDetailComponent;
  let fixture: ComponentFixture<PoseDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoseDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
