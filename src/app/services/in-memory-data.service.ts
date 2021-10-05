import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Pose } from '../Pose';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const poses = [
      {id: 1, englishName: 'Corpse Pose', sanskritName: 'Savasana', favorite: true, photo: '../assets/images/balasana'},
      {id: 2, englishName: 'Downward Dog Pose', sanskritName: 'Adho Mukha Svanasana', favorite: false, photo: '../assets/images/balasana'},
      {id: 3, englishName: 'Mountain Pose', sanskritName: 'Tadasana', favorite: true, photo: '../assets/images/balasana'},
      {id: 4, englishName: 'Child\'s Pose', sanskritName: 'Balasana', favorite: true, photo: '../assets/images/balasana'},
      {id: 5, englishName: 'Half Moon Pose', sanskritName: 'Ardha Chandrasana', favorite: true, photo: '../assets/images/balasana'},
      {id: 6, englishName: 'Warrior II Pose', sanskritName: 'Virabhadrasana II', favorite: true, photo: '../assets/images/balasana'},
      {id: 7, englishName: 'Garland Pose', sanskritName: 'Malasana', favorite: false, photo: '../assets/images/balasana'},
      {id: 8, englishName: 'Triangle Pose', sanskritName: 'Utthita Trikonasana', favorite: true, photo: '../assets/images/balasana'},
      {id: 9, englishName: 'Half Forward Bend Pose', sanskritName: 'Ardha Uttanasana', favorite: true, photo: '../assets/images/balasana'},
      {id: 10, englishName: 'Tree Pose', sanskritName: 'Vrksasana', favorite: false, photo: '../assets/images/balasana'},
      
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