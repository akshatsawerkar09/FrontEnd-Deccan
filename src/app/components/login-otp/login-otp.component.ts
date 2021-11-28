import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/utility/IUser';
import { LoginService } from 'src/app/utility/login.service';

@Component({
  selector: 'app-login-otp',
  templateUrl: './login-otp.component.html',
  styleUrls: ['./login-otp.component.scss']
})
export class LoginOtpComponent implements OnInit {

  user!: IUser;

  checkUser!: IUser;

  showOtpArea :string = "";

  userNotFound : string = "";

  inactiveAccount : string = "";

  enterdOtp!: number;

  invalidOtp : string = "";

  constructor(private _loginService  :LoginService , private _router : Router) { }

  ngOnInit(): void {
  }

  loginForm= new FormGroup({
    userName : new FormControl('',[Validators.required])
  });

  otpForm= new FormGroup({
    otp : new FormControl('',[Validators.required])
  });

  

  login(loginForm : FormGroup)
  {
    this.checkUser = this.loginForm.value;
    console.log(this.checkUser);

      this._loginService.loginWithOtp(this.checkUser.userName).subscribe(
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
              if(this.user.activateStatus == false)
              {
                 this.inactiveAccount = "Your account is not activated yet , Login with Otp is not yet available for you";
              }
              else
              {
                  this.showOtpArea = "show Now";
                  this._loginService.otpForLoginWithOtp(this.user).subscribe(
                    data => {
                      console.log(data);
                      this.user = data;
                    }
                  )
              }
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
      this._router.navigateByUrl('/home');
    }
    else
    {
      this.invalidOtp = "Invalid OTP";
    }

  }


}
