import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEnrolledSports } from './IEnrolledSports';

@Injectable({
  providedIn: 'root'
})
export class EnrolledSportsService {

  baseUrl : string = "http://localhost:8080/manager";

  constructor(private _http :  HttpClient) { }

  getEnrollmentRequests(sportsId : number): Observable<IEnrolledSports[]>{
    return this._http.get<IEnrolledSports[]>(this.baseUrl + '/getEnrolledSports/' + sportsId);
  }

  approveRequest(enrollId : number): Observable<IEnrolledSports>{
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this._http.put<IEnrolledSports>(this.baseUrl + '/approveUser/' + enrollId,
     httpOptions);
  }

  rejectRequest(enrollId : number): Observable<IEnrolledSports>{
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this._http.put<IEnrolledSports>(this.baseUrl + '/rejectUser/' + enrollId,
     httpOptions);
  }

  enrollBatch(enrolledSports : IEnrolledSports): Observable<IEnrolledSports>{
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this._http.post<IEnrolledSports>( 'http://localhost:8080/user/enrollBatch/' , enrolledSports ,
     httpOptions);
  }

  getEnrolledListByUser(userId : number): Observable<IEnrolledSports[]>{
    return this._http.get<IEnrolledSports[]>('http://localhost:8080/user/getEnrolledListByUser/' + userId);
  }

  payment(enrollId : number): Observable<IEnrolledSports>{
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this._http.put<IEnrolledSports>('http://localhost:8080/user/payment/' + enrollId,
     httpOptions);
  }
}
