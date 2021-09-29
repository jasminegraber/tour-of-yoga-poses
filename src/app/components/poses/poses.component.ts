import { Component, OnInit } from '@angular/core';
import { Pose } from 'src/app/Pose';

@Component({
  selector: 'app-poses',
  templateUrl: './poses.component.html',
  styleUrls: ['./poses.component.css']
})
export class PosesComponent implements OnInit {

  pose: Pose = {
    id: 1,
    englishName: 'Corpse Pose',
    sanskritName: 'Savasana'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
