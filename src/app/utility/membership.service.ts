import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMembership } from './IMembership';

@Injectable({
  providedIn: 'root'
})
export class MembershipService {

  constructor(private _http :  HttpClient) { }

  baseUrl : string = "http://localhost:8080/user";

  addMembership(membership : IMembership) : Observable<IMembership>{
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this._http.post<IMembership>(this.baseUrl + '/addMembership/',
    membership, httpOptions);
  }

  getMembership(userId : number) : Observable<IMembership>{
    return this._http.get<IMembership>(this.baseUrl + '/getMembership/' + userId);
  }

  renewMembership(membership : IMembership) : Observable<IMembership>{
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this._http.post<IMembership>(this.baseUrl + '/renewMembership/',
    membership, httpOptions);
  }
}
