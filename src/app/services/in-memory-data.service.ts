import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Pose } from '../Pose';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const poses = [
      { id: 1, englishName: 'Corpse Pose', sanskritName: 'Savasana', favorite: true, imageSrc: 'https://www.yogajournal.com/wp-content/uploads/2007/08/CCD03475-scaled.jpg', altText: 'Woman in Corpse pose' },
      { id: 2, englishName: 'Downward Dog Pose', sanskritName: 'Adho Mukha Svanasana', favorite: false, imageSrc: 'https://www.yogajournal.com/wp-content/uploads/2020/12/2hp_290_1721_bjk.jpg', altText: 'Woman in Downward Facing Dog pose' },
      { id: 3, englishName: 'Mountain Pose', sanskritName: 'Tadasana', favorite: true, imageSrc: 'https://www.yogajournal.com/wp-content/uploads/2007/08/Man-Doing-Mountain-Pose.jpg', altText: 'Man in Mountain pose' },
      { id: 4, englishName: 'Child\'s Pose', sanskritName: 'Balasana', favorite: true, imageSrc: 'https://www.yogajournal.com/wp-content/uploads/2007/08/CCD02240-scaled.jpg', altText: 'Man in Child\'s pose' },
      { id: 5, englishName: 'Half Moon Pose', sanskritName: 'Ardha Chandrasana', favorite: true, imageSrc: 'https://www.yogajournal.com/wp-content/uploads/2007/08/2hp_291_1860_gn_bjk.jpg', altText: 'Man in Half Moon pose' },
      { id: 6, englishName: 'Warrior II Pose', sanskritName: 'Virabhadrasana II', favorite: true, imageSrc: 'https://www.yogajournal.com/wp-content/uploads/2007/08/32hp_291_1870_gn_bjk.jpg', altText: 'Man in Warrior II pose' },
      { id: 7, englishName: 'Garland Pose', sanskritName: 'Malasana', favorite: false, imageSrc: 'https://www.yogajournal.com/wp-content/uploads/2007/08/ccd03464.jpg', altText: 'Woman in Garland pose' },
      { id: 8, englishName: 'Triangle Pose', sanskritName: 'Utthita Trikonasana', favorite: true, imageSrc: 'https://www.yogajournal.com/wp-content/uploads/2007/08/CCD03592-scaled.jpg', altText: 'Woman in Triangle pose' },
      { id: 9, englishName: 'Half Forward Bend Pose', sanskritName: 'Ardha Uttanasana', favorite: true, imageSrc: 'https://www.yogajournal.com/wp-content/uploads/2008/02/2hp_281_0176_bjk.jpg', altText: 'Woman in Half Forward Bend pose' },
      { id: 10, englishName: 'Tree Pose', sanskritName: 'Vrksasana', favorite: false, imageSrc: 'https://www.yogajournal.com/wp-content/uploads/2020/12/ccd03542-1.jpg', altText: 'Woman in Tree pose' },

    ];
    return { poses };
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