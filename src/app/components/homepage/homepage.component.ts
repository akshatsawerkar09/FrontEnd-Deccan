import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/utility/IUser';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  user!: IUser;

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage['user']);
    console.log(this.user);
  }

  slides = [
    {'image': 'https://cdn-wp.thesportsrush.com/2019/07/GettyImages-1158619369.jpg'}, 
    {'image': 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    {'image': 'https://material.angular.io/assets/img/examples/shiba2.jpg'}, 
    {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}, 
    {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}
  ];
}
