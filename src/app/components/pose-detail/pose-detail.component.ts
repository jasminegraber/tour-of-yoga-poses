import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pose } from 'src/app/Pose';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import { PoseService } from 'src/app/services/pose.service';

@Component({
  selector: 'app-pose-detail',
  templateUrl: './pose-detail.component.html',
  styleUrls: ['./pose-detail.component.scss']
})
export class PoseDetailComponent implements OnInit {

  pose: Pose = {
    id: -1,
    englishName: '',
    sanskritName: '',
    favorite: true,
    imageSrc: '',
    altText: ''
  }

  @Output() onToggleFavorite: EventEmitter<Pose> = new EventEmitter();

  faHeart = faHeart;


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
        .subscribe(); // () => this.goBack()
    }
  }

  onToggle(pose: Pose) {
    this.onToggleFavorite.emit(pose);
    this.pose.favorite = !this.pose.favorite;
    this.save();
  }



}
