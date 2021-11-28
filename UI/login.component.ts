import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbPaginationNumber } from '@ng-bootstrap/ng-bootstrap';
import { IUser } from 'src/app/utility/IUser';
import { LoginService } from 'src/app/utility/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _loginService : LoginService , private _router : Router) { }

  ngOnInit(): void {
  }

  loginForm= new FormGroup({
    userName : new FormControl('',[Validators.required]),
    password : new FormControl('',[Validators.required]),
  });

  otpForm= new FormGroup({
    otp : new FormControl('',[Validators.required])
  });

  checkUser!: IUser;

  user!: IUser;

  errorCode!: number;

  showOtpArea :string = "";

  invalidOtp : string = "";

  login(loginForm : FormGroup)
  {
      this.checkUser = this.loginForm.value;
      console.log(this.checkUser);

      this._loginService.authenticateUser(this.checkUser).subscribe(
        data => {
          console.log("login service called");
          console.log(data);
          this.user = data;
          console.log(this.user);
          sessionStorage['user' ] = JSON.stringify( this.user );
          if(this.user.activateStatus == false)
          {
            console.log(this.user);
            //this._router.navigateByUrl('/activateAccount');
            this.showOtpArea = "showOtpArea";
            this._loginService.sendOtp(this.user).subscribe(
              data => {
                  console.log(data);
                  this.user = data;
                  console.log(this.user);
                  sessionStorage['user' ] = JSON.stringify( this.user );
              }
            )
          }
          else
          {
            this._router.navigateByUrl('/home');
          }
        } ,
        err => {
            this.errorCode = err.status;
            console.log(err.status);
        }
      )
  }

  enterdOtp!: number;

  otp(otpForm : FormGroup)
  {
    console.log(this.user.otp)
    console.log(this.otpForm.value);
    this.enterdOtp  = this.otpForm.controls['otp'].value;
    console.log(this.enterdOtp);
    if(this.enterdOtp == this.user.otp)
    {
      console.log("hello");
      this._loginService.activateAccount(this.user.userId).subscribe(
        data => {
          console.log(data);
          this.user = data;
          sessionStorage['user' ] = JSON.stringify( this.user );
        }
      )
      this._router.navigateByUrl('/home');
    }
    else
    {
      this.invalidOtp = "Invalid OTP";
    }
  }



}
