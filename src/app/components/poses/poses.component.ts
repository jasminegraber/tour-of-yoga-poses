import { Component, OnInit } from '@angular/core';
import { Pose } from 'src/app/Pose';
import { POSES } from 'src/app/mock-poses';
import { PoseService } from 'src/app/services/pose.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-poses',
  templateUrl: './poses.component.html',
  styleUrls: ['./poses.component.css']
})
export class PosesComponent implements OnInit {

  poses: Pose[] = [];
  selectedPose?: Pose;

  constructor(private poseService: PoseService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getPoses();
  }

  onSelect(pose: Pose): void {
    this.selectedPose = pose;
    this.messageService.add(`PosesComponent: Selected component id=${pose.id}`)
  }

  create(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.poseService.create({ name } as unknown as Pose)
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
