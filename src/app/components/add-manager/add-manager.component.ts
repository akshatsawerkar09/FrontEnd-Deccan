import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/utility/IUser';

@Component({
  selector: 'app-add-manager',
  templateUrl: './add-manager.component.html',
  styleUrls: ['./add-manager.component.scss']
})
export class AddManagerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addManager!: IUser;

  
  

}
