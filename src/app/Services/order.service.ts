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

  updateOrder(Order: any ) {
    return this.myClient.put(`${this.Base_URL}`, Order);
  }

  deleteOrder(id: any) {
    return this.myClient.delete(`${this.Base_URL}/${id}`);
  }
  private  OrderKey= 'Order';

  addToOrder(item: any) {
    // Retrieve the Order items from local storage
    const OrderItems = this.getOrderItems();

    // Push the new item to the Order array
    OrderItems.push(item);

    // Update the Order items in local storage
    localStorage.setItem(this.OrderKey, JSON.stringify(OrderItems));
  }

  getOrderItems(): any[] {
    // Retrieve the Order items from local storage
    const OrderItemsString = localStorage.getItem(this.OrderKey);

    // Parse the Order items from the string representation
    if (OrderItemsString) {
      return JSON.parse(OrderItemsString);
    }

    // Return an empty array if no Order items are found
    return [];
  }
}