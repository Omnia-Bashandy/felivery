import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CanclledordersService {

  private canceledOrderData: any;

  setCanceledOrderData(orderData: any) {
    this.canceledOrderData = orderData;
  }

  getCanceledOrderData() {
    return this.canceledOrderData;
  }
}
