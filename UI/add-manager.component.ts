import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from 'src/app/utility/IUser';
import { RegistrationService } from 'src/app/utility/registration.service';

@Component({
  selector: 'app-add-manager',
  templateUrl: './add-manager.component.html',
  styleUrls: ['./add-manager.component.scss']
})
export class AddManagerComponent implements OnInit {

  

  constructor(private _registrationService  :  RegistrationService) { }

  ngOnInit(): void {
  }

  addManagerObj!: IUser;

  usernameNotAvailable : string = "";

  managerForm= new FormGroup({
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
  
  addManager(managerForm  : FormGroup)
  {
      this.addManagerObj = this.managerForm.value;
      this.addManagerObj.userRole = "MANAGER";
      this.addManagerObj.loginAttempt = 0;
      this.addManagerObj.otp  = 0;
      this.addManagerObj.activateStatus = false;
      console.log(this.addManagerObj);

      this._registrationService.checkUsername(this.addManagerObj.userName).subscribe(
        data =>  {
          console.log(data);
          if(data  == null)
          {
            this.usernameNotAvailable =  "";
            this._registrationService.addManager(this.addManagerObj).subscribe(
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
