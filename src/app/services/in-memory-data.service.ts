import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Pose } from '../Pose';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const poses = [
      {id: 1, englishName: 'Corpse Pose', sanskritName: 'Savasana', favorite: true},
      {id: 2, englishName: 'Downward Dog Pose', sanskritName: 'Adho Mukha Svanasana', favorite: false},
      {id: 3, englishName: 'Mountain Pose', sanskritName: 'Tadasana', favorite: true},
      {id: 4, englishName: 'Warrior I Pose', sanskritName: 'Virabhadrasana I', favorite: false},
      {id: 5, englishName: 'Half Moon Pose', sanskritName: 'Ardha Chandrasana', favorite: true},
      {id: 6, englishName: 'Warrior II Pose', sanskritName: 'Virabhadrasana II', favorite: true},
      {id: 7, englishName: 'Extended Side Angle Pose', sanskritName: 'Utthita Parvakonasana', favorite: false},
      {id: 8, englishName: 'Triangle Pose', sanskritName: 'Utthita Trikonasana', favorite: true},
      {id: 9, englishName: 'Half Forward Bend Pose', sanskritName: 'Ardha Uttanasana', favorite: true},
      {id: 10, englishName: 'Tree Pose', sanskritName: 'Vrksasana', favorite: false},
      
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