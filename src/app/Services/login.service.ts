import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  private loginUrl = 'https://localhost:44309/api/Store/Login';

  login(credentials: any) {
    return this.http.post(this.loginUrl,credentials );
  }
}
