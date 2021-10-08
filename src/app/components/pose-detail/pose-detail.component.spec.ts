import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PoseService } from 'src/app/services/pose.service';
import { of } from 'rxjs';
import { PoseDetailComponent } from './pose-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('PoseDetailComponent', () => {
  let component: PoseDetailComponent;
  let fixture: ComponentFixture<PoseDetailComponent>;
  let poseService: any;
  let mockPose = {
    id: 0,
    englishName: 'Child\'s Pose',
    sanskritName: 'Balasana',
    favorite: true,
    imageSrc: 'test',
    altText: 'test'
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoseDetailComponent ],
      imports: [
        HttpClientModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        FontAwesomeModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    poseService = TestBed.inject(PoseService);
  });

  it('should create', () => {
    const poseSpy = spyOn(poseService, "getPose").and.returnValue(of(mockPose));
    component.ngOnInit();
    expect(component).toBeTruthy();
    expect(poseSpy).toHaveBeenCalled();
  });
});
