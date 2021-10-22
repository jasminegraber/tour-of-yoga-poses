import { Component, OnInit } from '@angular/core';
import { Pose } from 'src/app/Pose';
import { PoseService } from 'src/app/services/pose.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-pose',
  templateUrl: './create-pose.component.html',
  styleUrls: ['./create-pose.component.scss']
})
export class CreatePoseComponent implements OnInit {
  poses: Pose[] = [];

  constructor(private poseService: PoseService, private route: Router) { }

  ngOnInit(): void {
  }

  newPose = new FormGroup({
    englishName: new FormControl(''),
    sanskritName: new FormControl(''),
    benefits: new FormControl(''),
    favorite: new FormControl(false),
    imageSrc: new FormControl(''),
    altText: new FormControl('')
  })

  add(): void {
    let pose = {
      englishName: this.newPose.controls.englishName.value,
      sanskritName: this.newPose.controls.sanskritName.value,
      benefits: this.newPose.controls.benefits.value,
      favorite: this.newPose.controls.favorite.value,
      imageSrc: this.newPose.controls.imageSrc.value,
      altText: this.newPose.controls.altText.value
    }

    this.poseService.addPose(pose as Pose)
      .subscribe(pose => {
        this.poses.push(pose);
      });
    this.route.navigate(['/poses']);
  }

}
