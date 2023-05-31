import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private tokenKey = 'auth_token';
  private loginUrl = 'https://localhost:44309/api/Login/Login';

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  // setToken(token: string) {
  //   // Store token in cookie
  //   this.cookieService.set(this.tokenKey, token);

  //   // Store token in local storage
  //   localStorage.setItem(this.tokenKey, token);
  // }

  // getToken(): string | null {
  //   // Get token from cookie
  //   const cookieToken = this.cookieService.get(this.tokenKey);

  //   if (cookieToken) {
  //     return cookieToken;
  //   }

  //   // Get token from local storage
  //   return localStorage.getItem(this.tokenKey);
  // }

  // removeToken() {
  //   // Remove token from cookie
  //   this.cookieService.delete(this.tokenKey);

  //   // Remove token from local storage
  //   localStorage.removeItem(this.tokenKey);
  // }

  login(credentials: any) {
    return this.http.post(this.loginUrl, credentials);
  }

  // logout

  // logout(){
  //   // return !this.login;
  //   localStorage.removeItem('token');
  // }
}
