import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private myClient: HttpClient) { }
  private Base_URL = "https://localhost:44309/api/Customer/Registration";
  
  // getAllRestaurants() {
  //   return this.myClient.get(this.Base_URL);
  // }

  // getRestaurantById(id: any) {
  //   return this.myClient.get(`${this.Base_URL}/${id}`);
  // }

  // updateRestaurant(id : any,Restaurant: any ) {
  //   return this.myClient.put(`${this.Base_URL}`, Restaurant);
  // }

  // deleteRestaurant(id: any) {
  //   return this.myClient.delete(`${this.Base_URL}/${id}`);
  // }

  Register(user: any ) {
    return this.myClient.post(this.Base_URL,user );
  }
}

