import { Component, OnInit, Input } from '@angular/core';
import { Pose } from 'src/app/Pose';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PoseService } from 'src/app/services/pose.service';

@Component({
  selector: 'app-pose-detail',
  templateUrl: './pose-detail.component.html',
  styleUrls: ['./pose-detail.component.scss']
})
export class PoseDetailComponent implements OnInit {

  @Input() pose?: Pose;
  @Input() contentEditable?: boolean;

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

  save(): void {
    if (this.pose) {
      this.poseService.updatePose(this.pose)
        .subscribe(() => this.goBack());
    }
  }

  toggleEditable(event: any) {
    if (event.target.checked) {
      this.contentEditable = true;
    } else {
      this.contentEditable = false;
    }
  }

}
