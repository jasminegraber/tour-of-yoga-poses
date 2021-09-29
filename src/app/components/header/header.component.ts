import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Tour of Yoga Poses';
  subtitle = 'Sanskrit and English pose names';
  
  constructor() { }

  ngOnInit(): void {
  }

}
