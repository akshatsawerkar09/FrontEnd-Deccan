import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  managerForm= new FormGroup({
    userName : new FormControl('',[Validators.required]),
    userRole : new FormControl('',[Validators.required]),
    email : new FormControl('',[Validators.required]),
    password : new FormControl('',Validators.required),
    phoneNumber : new FormControl('',Validators.required),
    gender : new FormControl('',Validators.required),
    address : new FormControl('',Validators.required)
  });
  

}
