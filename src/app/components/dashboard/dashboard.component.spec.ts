import { ComponentFixture, TestBed } from '@angular/core/testing';

import { of } from 'rxjs';
import { DashboardComponent } from './dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { PoseService } from 'src/app/services/pose.service';


describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
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
      declarations: [ DashboardComponent ],
      imports: [
        HttpClientModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    poseService = TestBed.inject(PoseService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('GetFavoritePoses', () => {

    it('should get favorite poses', () => {
    const poseSpy = spyOn(poseService, "getPose").and.returnValue(of(mockPose.favorite));
    component.ngOnInit();
    expect(component).toBeTruthy();
    expect(poseSpy).toHaveBeenCalled();
    });
  });
});
