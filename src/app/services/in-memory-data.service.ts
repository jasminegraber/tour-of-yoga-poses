import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Pose } from '../Pose';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const poses = [
      {id: 1, englishName: 'Corpse Pose', sanskritName: 'Savasana'},
      {id: 2, englishName: 'Downward Facing Dog Pose', sanskritName: 'Adho Mukha Svanasana'},
      {id: 3, englishName: 'Mountain Pose', sanskritName: 'Tadasana'},
      {id: 4, englishName: 'Warrior I Pose', sanskritName: 'Virabhadrasana I'},
      {id: 5, englishName: 'Half Moon Pose', sanskritName: 'Ardha Chandrasana'},
      {id: 6, englishName: 'Warrior II Pose', sanskritName: 'Virabhadrasana II'},
      {id: 7, englishName: 'Extended Side Angle Pose', sanskritName: 'Utthita Parvakonasana'},
      {id: 8, englishName: 'Triangle Pose', sanskritName: 'Utthita Trikonasana'},
      {id: 9, englishName: 'Half Forward Bend Pose', sanskritName: 'Ardha Uttanasana'},
      {id: 10, englishName: 'Tree Pose', sanskritName: 'Vrksasana'},
      
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