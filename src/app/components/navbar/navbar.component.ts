import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user : any ={
    userRole : "",
  }

  constructor() { }

  ngOnInit(): void {
     // sessionStorage.setItem( "user" , this.user );

     //sessionStorage['user' ] = JSON.stringify( this.user );

     this.user = JSON.parse(sessionStorage['user']);
    console.log(this.user);

  }

  
}
