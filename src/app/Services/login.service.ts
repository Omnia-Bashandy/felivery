import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private tokenKey = 'auth_token';
  private loginUrl = 'https://localhost:44309/api/Login/Login';

  constructor(private http: HttpClient) {}
  login(credentials: any) {
    return this.http.post(this.loginUrl, credentials);
  }

  private _listeners = new Subject<any>();
  listen(): Observable<any>{
    return this._listeners.asObservable();
  }
  filter(filterBy:string){
    this._listeners.next(filterBy);
  }
}
