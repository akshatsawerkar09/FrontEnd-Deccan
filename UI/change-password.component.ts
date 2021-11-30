import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { concat } from 'rxjs';
import { IUser } from 'src/app/utility/IUser';
import { LoginService } from 'src/app/utility/login.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  userNotFound : string = "";

  checkUser!: IUser;

  newPassword!: string;

  user!: IUser;

  constructor(private _loginService : LoginService) { }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage['user']);
    console.log(this.user);
  }

  changePasswordForm= new FormGroup({
    userName : new FormControl('',[Validators.required]) ,
    password : new FormControl('',[Validators.required]) ,
    newPassword : new FormControl('',[Validators.required])
  });

  changePassword(changePasswordForm : FormGroup)
  {
      this.checkUser = this.changePasswordForm.value;
      console.log(this.checkUser);
      this.newPassword =  this.changePasswordForm.controls['newPassword'].value;

      this._loginService.changePassword(this.checkUser , this.newPassword).subscribe(
        data =>  {
          console.log(data);
          this.user =  data;
          if(this.user == null)
          {
              this.userNotFound = "Invalid Username";
          }
          else
          {
            sessionStorage['user' ] = JSON.stringify( this.user );
          }
        }
      )
  }

}
