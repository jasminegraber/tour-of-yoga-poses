import { Injectable } from '@angular/core';
import { Pose } from '../Pose';
import { POSES } from '../mock-poses';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PoseService {

  constructor() { }

  getPoses(): Observable<Pose[]> {
    const poses = of(POSES);
    return poses;
  }
}
