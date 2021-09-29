import { Component, OnInit, Input } from '@angular/core';
import { Pose } from 'src/app/Pose';

@Component({
  selector: 'app-pose-detail',
  templateUrl: './pose-detail.component.html',
  styleUrls: ['./pose-detail.component.css']
})
export class PoseDetailComponent implements OnInit {

  @Input() pose?: Pose;

  constructor() { }

  ngOnInit(): void {
  }

}
