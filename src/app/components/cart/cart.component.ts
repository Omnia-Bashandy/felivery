import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  category:any
  price:any;

// Retrieve data from local storage
retrievedData = localStorage.getItem('order');
if (retrievedData: any) {
  const order = JSON.parse(retrievedData);
  this.category = order.category;
  this.price = order.price;
  console.log(order);
  console.log(this.category);
  
}


}
