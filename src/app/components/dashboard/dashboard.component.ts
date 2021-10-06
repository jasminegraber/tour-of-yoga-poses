import { Component, OnInit } from '@angular/core';
import { Pose } from 'src/app/Pose';
import { PoseService } from 'src/app/services/pose.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  poses: Pose[] = [];

  constructor(private poseService: PoseService) { 
  }

  ngOnInit(): void {
    this.getPoses();
  }

  getPoses(): void {
    this.poseService.getPoses()
        .subscribe(poses => this.poses = 
                  poses.filter (  pose => pose.favorite )
          );
  }

}
