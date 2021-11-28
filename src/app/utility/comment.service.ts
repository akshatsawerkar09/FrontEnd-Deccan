import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IComment } from './IComment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private _http :  HttpClient) { }

  baseUrl : string = "http://localhost:8080/user";

  getAllComments() : Observable<IComment[]>{
    return this._http.get<IComment[]>(this.baseUrl + '/getAllComments');
  }
}
