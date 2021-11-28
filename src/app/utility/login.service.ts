import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from './IUser';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http :  HttpClient) { }

  baseUrl : string = "http://localhost:8080/user";

  authenticateUser(user : IUser):Observable<IUser>{
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this._http.put<IUser>(this.baseUrl + '/authenticateUser/',
    user, httpOptions);
  }

  sendOtp(user : IUser):Observable<IUser>{
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this._http.put<IUser>(this.baseUrl + '/sendOtp/',
    user, httpOptions);
  }

  activateAccount(userId : number):Observable<IUser>{
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this._http.put<IUser>(this.baseUrl + '/activateAccount/'+userId,
     httpOptions);
  }

  loginWithOtp(userName : string):Observable<IUser>{
    return this._http.get<IUser>(this.baseUrl + '/loginWithOtp/'+userName );
  }

  otpForLoginWithOtp(user : IUser):Observable<IUser>{
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this._http.put<IUser>(this.baseUrl + '/otpForLoginWithOtp/',
    user, httpOptions);
  }

}
