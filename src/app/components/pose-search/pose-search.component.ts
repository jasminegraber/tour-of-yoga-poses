import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Pose } from 'src/app/Pose';
import { PoseService } from 'src/app/services/pose.service';

@Component({
  selector: 'app-pose-search',
  templateUrl: './pose-search.component.html',
  styleUrls: [ './pose-search.component.css' ]
})
export class PoseSearchComponent implements OnInit {
  poses$!: Observable<Pose[]>;
  private searchTerms = new Subject<string>();

  constructor(private poseService: PoseService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.poses$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.poseService.searchPoses(term)),
    );
  }
}