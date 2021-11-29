import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from 'src/app/utility/IUser';
import { RegistrationService } from 'src/app/utility/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  addUserObj!: IUser;

  usernameNotAvailable : string = "";

  constructor(private _registrationService  :  RegistrationService) { }

  ngOnInit(): void {
  }

  userForm= new FormGroup({
    userName : new FormControl('',[Validators.required]),
    userRole : new FormControl('',[Validators.required]),
    email : new FormControl('',[Validators.required]),
    password : new FormControl('',Validators.required),
    phoneNumber : new FormControl('',Validators.required),
    gender : new FormControl('',Validators.required),
    address : new FormControl('',Validators.required),
    loginAttempt : new FormControl('',Validators.required),
    otp : new FormControl('',Validators.required),
    activateStatus : new FormControl('',Validators.required)
  });

  addUser(userForm :  FormGroup)
  {
      this.addUserObj =  this.userForm.value;
      this.addUserObj.userRole = "USER";
      this.addUserObj.loginAttempt = 0;
      this.addUserObj.otp  = 0;
      this.addUserObj.activateStatus = false;
      console.log(this.addUserObj);

      
      this._registrationService.checkUsername(this.addUserObj.userName).subscribe(
        data =>  {
          console.log(data);
          if(data  == null)
          {
            this.usernameNotAvailable =  "";
            this._registrationService.addUser(this.addUserObj).subscribe(
              data => {
                console.log(data);
              }
            )
          }
          else
          {
             this.usernameNotAvailable =  "show now";
          }
        }
      )
  }

}
