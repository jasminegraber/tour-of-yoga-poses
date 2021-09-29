import { Injectable } from '@angular/core';
import { Pose } from '../Pose';
import { POSES } from '../mock-poses';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PoseService {

  constructor(private messageService: MessageService) { }

  getPoses(): Observable<Pose[]> {
    const poses = of(POSES);
    this.messageService.add('PoseService: fetched poses');
    return poses;
  }
}
