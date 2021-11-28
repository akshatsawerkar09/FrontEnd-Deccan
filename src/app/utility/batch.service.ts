import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBatch } from './IBatch';

@Injectable({
  providedIn: 'root'
})
export class BatchService {

  baseUrl : string = "http://localhost:8080/manager";

  constructor(private _http :  HttpClient) { }

  getManagerBatches(sportsId : number): Observable<IBatch[]>{
    return this._http.get<IBatch[]>( this.baseUrl + '/getManagerBatches/' + sportsId);
  }

  getBatchesByUser(userId : number , sportsId : number): Observable<IBatch[]>{
    return this._http.get<IBatch[]>('http://localhost:8080/user/getBatchesByUser/'+userId + '/' + sportsId);
  }

  getBatchById(batchId : number): Observable<IBatch>{
    return this._http.get<IBatch>(this.baseUrl + '/getBatches/' + batchId);
  }

  addBatch(batch : IBatch) : Observable<IBatch>{
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this._http.post<IBatch>(this.baseUrl + '/addBatch/',
    batch, httpOptions);
  }

  deleteBatch(batchId : number){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this._http.delete<number>(this.baseUrl + '/removeBatches/' +batchId,
   httpOptions);
}

  updateBatch(batch : IBatch):Observable<IBatch>{
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this._http.put<IBatch>(this.baseUrl + '/updateBatches/',
    batch, httpOptions);
  }

  getOffers():Observable<IBatch[]>{
    return this._http.get<IBatch[]>("http://localhost:8080/user" + '/getOffers/');
  }
}
