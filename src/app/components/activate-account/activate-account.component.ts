import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/utility/IUser';

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.scss']
})
export class ActivateAccountComponent implements OnInit {

  user!: IUser;

  constructor() { }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage['user']);
    console.log(this.user);
  }

}
