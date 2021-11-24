import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservedValueOf } from 'rxjs';
import { ISports } from './ISports';
import { IUser } from './IUser';

@Injectable({
  providedIn: 'root'
})
export class SportsService {

  constructor(private _http :  HttpClient) { }

  baseUrl : string = "http://localhost:8080/admin";

  getIdelManagerList() : Observable<IUser[]>{
    return this._http.get<IUser[]>(this.baseUrl + '/getIdelManagerList');
  }

  addSports(sports : ISports) : Observable<ISports>{
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this._http.post<ISports>(this.baseUrl + '/addSports/',
    sports, httpOptions);
  }

  deleteSports(sportsId : number){
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
      return this._http.delete<number>(this.baseUrl + '/removeSports/' +sportsId,
     httpOptions);
  }

  getAllSports():Observable<ISports[]>{
      return this._http.get<ISports[]>(this.baseUrl + '/getAllSports');
  }

  getSportsById(sportsId : number) : Observable<ISports>{
    return this._http.get<ISports>(this.baseUrl + '/getSports/' + sportsId);
  }

  updateSports(sports : ISports):Observable<ISports>{
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this._http.put<ISports>(this.baseUrl + '/updateSports/',
    sports, httpOptions);
  }

  getSportsByManagerId(userId : number):Observable<ISports>{
    return this._http.get<ISports>("http://localhost:8080/manager/getSportsByManagerId/" + userId);
  }
}
