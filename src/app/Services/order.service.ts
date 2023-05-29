import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private myClient: HttpClient) { }
  private Base_URL = "https://localhost:44309/api/Order";
  
  getAllOrders() {
    return this.myClient.get(this.Base_URL);
  }

  getOrderById(id: any) {
    return this.myClient.get(`${this.Base_URL}/${id}`);
  }

  updateOrder(id : any,Order: any ) {
    return this.myClient.put(`${this.Base_URL}`, Order);
  }

  deleteOrder(id: any) {
    return this.myClient.delete(`${this.Base_URL}/${id}`);
  }

  // Register(user: any ) {
  //   return this.myClient.post(this.Base_URL,user );
  // }
}
