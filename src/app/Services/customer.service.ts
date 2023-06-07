import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private myClient: HttpClient) { }
  private Base_URL = "https://localhost:44309/api/Customer/Registration";
  Register(user: any ) {
    return this.myClient.post(this.Base_URL,user );
  }
}

