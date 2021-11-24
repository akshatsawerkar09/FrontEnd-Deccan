import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from './IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http :  HttpClient) { }

  baseUrl : string = "http://localhost:8080/admin";

  getLockedAccounts(): Observable<IUser[]>
  {
    return this._http.get<IUser[]>(this.baseUrl + '/listLockedAccounts');
  }

  unlockAccount(userId : number)
  {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
      return this._http.put<number>(this.baseUrl + '/unlockAccounts/' +userId,
     httpOptions);
  }
}
