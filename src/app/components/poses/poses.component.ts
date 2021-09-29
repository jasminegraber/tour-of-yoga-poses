import { Component, OnInit } from '@angular/core';
import { Pose } from 'src/app/Pose';
import { POSES } from 'src/app/mock-poses';

@Component({
  selector: 'app-poses',
  templateUrl: './poses.component.html',
  styleUrls: ['./poses.component.css']
})
export class PosesComponent implements OnInit {

  poses = POSES;
  selectedPose?: Pose;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(pose: Pose): void {
    this.selectedPose = pose;
  }

}
