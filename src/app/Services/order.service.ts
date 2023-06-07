import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private myClient: HttpClient) { }
  private Base_URL = "https://localhost:44309/api/Order";
  private finishedOrders ="https://localhost:44309/api/Store/FinshedOrders";
  private ordersREST ="https://localhost:44309/api/Store/PendingOrders";
  private pendingOrd ="https://localhost:44309/api/Store/TotalPendingOrders";
  private DeliveredURL ="https://localhost:44309/api/Store/TotalDeliveredOrders";
  private updateDone ="https://localhost:44309/api/Store/DoneOrder";


  getAllOrders() {
    return this.myClient.get(this.Base_URL);
  }

  getOrderById(id: any) {
    return this.myClient.get(`${this.Base_URL}/${id}`);
  }
  getFinishedOrders(id: any) {
    return this.myClient.get(`${this.finishedOrders}/${id}`);
  }

  updateOrder(Order: any ) {
    return this.myClient.put(`${this.Base_URL}`, Order);
  }

  deleteOrder(id: any) {
    return this.myClient.delete(`${this.Base_URL}/${id}`);
  }
  addOrder(Order:any){
    return this.myClient.post(`${this.Base_URL}`, Order);
    
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
  getOrdersbyRestID(id: any){
    return this.myClient.get(`${this.ordersREST}/${id}`);
  }
  getPending(id: any){
    return this.myClient.get(`${this.pendingOrd}/${id}`);
  }
  getDelivered(id: any){
    return this.myClient.get(`${this.DeliveredURL}/${id}`);
  }
  updateDonestatus(orderID:any){
    // let id:any
    return this.myClient.put(`${this.updateDone}/${orderID}`,"");
  }

}
