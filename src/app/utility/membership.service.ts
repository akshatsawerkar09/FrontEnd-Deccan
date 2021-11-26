import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMembershihp } from './IMembership';

@Injectable({
  providedIn: 'root'
})
export class MembershipService {

  constructor(private _http :  HttpClient) { }

  baseUrl : string = "http://localhost:8080/user";

  addMembership(sports : IMembershihp) : Observable<IMembershihp>{
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this._http.post<IMembershihp>(this.baseUrl + '/addMembership/',
    sports, httpOptions);
  }
}
