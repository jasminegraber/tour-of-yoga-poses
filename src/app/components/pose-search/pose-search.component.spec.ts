import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoseSearchComponent } from './pose-search.component';

describe('PoseSearchComponent', () => {
  let component: PoseSearchComponent;
  let fixture: ComponentFixture<PoseSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoseSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoseSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
