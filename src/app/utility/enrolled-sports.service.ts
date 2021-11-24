import { HttpClient } from '@angular/common/http';
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
}
