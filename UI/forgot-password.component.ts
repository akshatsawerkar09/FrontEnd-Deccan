import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/utility/IUser';
import { LoginService } from 'src/app/utility/login.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  userNotFound : string = "";

  checkUser!: IUser;

  user!: IUser;

  showOtpArea :string = "";

  enterdOtp!: number;

  invalidOtp : string = "";

  showLoginForm : string ="showLoginForm";

  showPasswordForm : string ="";

  forgotPasswordForm= new FormGroup({
    userName : new FormControl('',[Validators.required])
  });

  otpForm= new FormGroup({
    otp : new FormControl('',[Validators.required])
  });

  updatePasswordForm= new FormGroup({
    password : new FormControl('',[Validators.required])
  });

  constructor(private _loginService  :LoginService , private _router : Router) { }

  ngOnInit(): void {
  }

  forgotPassword(forgotPasswordForm  : FormGroup)
  {
      this.checkUser = this.forgotPasswordForm.value;
      console.log(this.checkUser);
      this._loginService.checkUsername(this.checkUser.userName).subscribe(
        data => {
          console.log(data);
          this.user = data;
          if(this.user == null)
          {
              this.userNotFound = "Invalid Username";
          }
          else
          {
              this.userNotFound = "";
              this.showLoginForm = "";
              this.showOtpArea = "show Now";
              console.log(this.user);
              this._loginService.otpForLoginWithOtp(this.user).subscribe(
                data => {
                  console.log(data);
                  this.user = data;
                }
              )
              
          }
        }
      )
  }

  otp(otpForm : FormGroup)
  { 
    this.enterdOtp  = this.otpForm.controls['otp'].value;

    if(this.enterdOtp == this.user.otp)
    {
      sessionStorage['user' ] = JSON.stringify( this.user );
      //this._router.navigateByUrl('/home');
      this.showOtpArea = "";
      this.showPasswordForm="show now"
    }
    else
    {
      this.invalidOtp = "Invalid OTP";
    }

  }

  updatePassword(updatePasswordForm : FormGroup)
  {
    this.user.password = this.updatePasswordForm.controls['password'].value;
    console.log(this.user);
    this._loginService.forgotPassword(this.user).subscribe(
      data =>  {
        console.log(data);
        this.user = data;
        sessionStorage['user' ] = JSON.stringify( this.user );
        this._router.navigateByUrl('/home');
      }
    )
  }
}
