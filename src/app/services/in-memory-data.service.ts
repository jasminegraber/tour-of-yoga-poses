import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Pose } from '../Pose';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const poses = [
      {id: 3, englishName: 'Mountain', sanskritName: 'Tadasana'},
      {id: 13, englishName: 'Raised Hands', sanskritName: 'Urdhva Hastasana'},
      {id: 1, englishName: 'Forward Bend', sanskritName: 'Uttanasana'},
      {id: 8, englishName: 'Half Forward Bend', sanskritName: 'Ardha Uttanasana'},
      {id: 2, englishName: 'Plank', sanskritName: 'Phalakasana'},
      {id: 4, englishName: 'Four-Limbed Staff', sanskritName: 'Chaturanga Dandasana'},
      {id: 5, englishName: 'Upward Facing Dog', sanskritName: 'Urdhva Mukha Svanasana'},
      {id: 6, englishName: 'Downward Facing Dog', sanskritName: 'Adho Mukha Svanasana'},
      {id: 7, englishName: 'Child\'s', sanskritName: 'Balasana'},
      {id: 9, englishName: 'Tree Pose', sanskritName: 'Vrksasana'},
      {id: 10, englishName: 'Half Moon Pose', sanskritName: 'Ardha Chandrasana'},
  ];
    return {poses};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(poses: Pose[]): number {
    return poses.length > 0 ? Math.max(...poses.map(pose => pose.id)) + 1 : 11;
  }
}