import { Component, OnInit } from '@angular/core';
import { Pose } from 'src/app/Pose';
import { PoseService } from 'src/app/services/pose.service';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-poses',
  templateUrl: './poses.component.html',
  styleUrls: ['./poses.component.scss']
})
export class PosesComponent implements OnInit {

  faTrashAlt = faTrashAlt;
  poses: Pose[] = [];

  constructor(private poseService: PoseService) { }

  ngOnInit(): void {
    this.getPoses();
  }

  create(sanskritName: string, englishName: string): void {
    sanskritName = sanskritName.trim();
    englishName = englishName.trim();
    if (!sanskritName || !englishName) { return; }
    this.poseService.create({ sanskritName, englishName } as Pose)
      .subscribe(pose => {
        this.poses.push(pose);
      });
  }

  getPoses(): void {
    this.poseService.getPoses()
        .subscribe(poses => this.poses = poses);
  }

  delete(pose: Pose): void {
    this.poses = this.poses.filter(h => h !== pose);
    this.poseService.delete(pose.id).subscribe();
  }

}
