import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

  // logout

  // logout(){
  //   // return !this.login;
  //   localStorage.removeItem('token');
  // }
}
