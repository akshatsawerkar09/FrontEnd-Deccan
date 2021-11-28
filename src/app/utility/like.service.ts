import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILike } from './ILike';

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  constructor(private _http :  HttpClient) { }

  baseUrl : string = "http://localhost:8080/user";

  getAllLikes() : Observable<ILike[]>{
    return this._http.get<ILike[]>(this.baseUrl + '/getAllLikes');
  }
}
