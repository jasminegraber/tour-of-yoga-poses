import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { PosesComponent } from './poses.component';
import { PoseService } from 'src/app/services/pose.service';
import { of } from 'rxjs';
import { componentFactoryName } from '@angular/compiler';

describe('PosesComponent', () => {
  let component: PosesComponent;
  let fixture: ComponentFixture<PosesComponent>;
  let poseService: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosesComponent ],
      imports: [
        HttpClientModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    poseService = TestBed.inject(PoseService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('CreatePose', () => {
    let poseCount: number;
    let poseSpy: any;

    beforeEach(() => {
      poseCount = component.poses.length;
      poseSpy = spyOn(poseService, 'create').and.returnValue(of('test'));
    });

    it('should create new pose', () => {    
      component.create('Balasana', 'Child\'s pose');
      expect(poseSpy).toHaveBeenCalled();
      expect(component.poses.length).toEqual(poseCount + 1);
    });

    it('should not create on blank names', () => {   
      component.create('', '');
      expect(poseSpy).not.toHaveBeenCalled();
      expect(component.poses.length).toEqual(poseCount);
    });

    it('should trim extra space', () => {   
      component.create('sanskrit     ', 'english    ');
      expect(poseSpy).toHaveBeenCalled();
      expect(component.poses.length).toEqual(poseCount + 1);
    });
  });

  describe('DeletePose', () => {

    it('should delete a pose', () => {
  
      let mockPose = {
        id: 0,
        englishName: 'Child\'s Pose',
        sanskritName: 'Balasana',
        favorite: true,
        imageSrc: 'test',
        altText: 'test'
      };
  
      component.poses.push(mockPose);
      component.delete(mockPose);
      expect(component.poses.length).toEqual(0);      
    });
  
  });

});


