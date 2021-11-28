import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private _router : Router) { }

  one : number = 1;

  ngOnInit(): void {
      sessionStorage.clear();
      this._router.navigateByUrl('/home');
  }

}
