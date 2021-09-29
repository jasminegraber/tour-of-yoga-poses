import { Component, OnInit, Input } from '@angular/core';
import { Pose } from 'src/app/Pose';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PoseService } from 'src/app/services/pose.service';

@Component({
  selector: 'app-pose-detail',
  templateUrl: './pose-detail.component.html',
  styleUrls: ['./pose-detail.component.css']
})
export class PoseDetailComponent implements OnInit {

  @Input() pose?: Pose;

  constructor(
    private route: ActivatedRoute,
    private poseService: PoseService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getPose();
  }

  getPose(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.poseService.getPose(id)
        .subscribe(pose => this.pose = pose);
  }

  goBack(): void {
    this.location.back();
  }

}
