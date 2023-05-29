import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  order:any=[];
  totalprice:any
  
  ngOnInit() {
    const orderString = localStorage.getItem('order');
    if (orderString) {
      this.order = JSON.parse(orderString);
    }  }
// Retrieve data from local storage
// retrievedData = localStorage.getItem('order');
if (retrievedData: any) {
  this.order = [JSON.parse(retrievedData)];
  const category = this.order.category;
  const price = this.order.menuItemID.price;
  const menuItemID = this.order.menuItemID;
  const quantity = this.order.quantity;

  // if (quantity > 1) {
  //  this.totalprice += price * quantity;
  // }
  
}


calculateTotalPrice() {
  let totalPrice = 0;
  for (const order of this.order) {
    totalPrice += order.menuItemID.price * order.quantity;
  }
  return totalPrice;
}
removefromCart(){
  localStorage.removeItem('order');
  // localStorage.clear();
}
}
