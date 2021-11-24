import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  slides = [
    {'image': 'https://material.angular.io/assets/img/examples/shiba2.jpg'}, 
    {'image': 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    {'image': 'https://material.angular.io/assets/img/examples/shiba2.jpg'}, 
    {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}, 
    {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}
  ];
}
