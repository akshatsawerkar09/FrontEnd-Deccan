import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
     // sessionStorage.setItem( "user" , this.user );

     sessionStorage['user' ] = JSON.stringify( this.user );
  }

  user : any ={
    userId : 1 ,
    address : "pune" ,
    email : "mark@gmail.com",
    gender : "MALE",
    loginAttempt : 0,
    password : "mark",
    phoneNumber : "123456789" ,
    userName : "mark",
    userRole : "USER",

  }



  
}
