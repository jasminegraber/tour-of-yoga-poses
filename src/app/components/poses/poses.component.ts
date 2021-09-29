import { Component, OnInit } from '@angular/core';
import { Pose } from 'src/app/Pose';
import { POSES } from 'src/app/mock-poses';
import { PoseService } from 'src/app/services/pose.service';

@Component({
  selector: 'app-poses',
  templateUrl: './poses.component.html',
  styleUrls: ['./poses.component.css']
})
export class PosesComponent implements OnInit {

  poses: Pose[] = [];
  selectedPose?: Pose;

  constructor(private poseService: PoseService) { }

  ngOnInit(): void {
    this.getPoses();
  }

  onSelect(pose: Pose): void {
    this.selectedPose = pose;
  }

  getPoses(): void {
    this.poseService.getPoses()
        .subscribe(poses => this.poses = poses);
  }

}
