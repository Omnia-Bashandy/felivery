import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';
import { OrderService } from 'src/app/Services/order.service';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  orders: any[] = [];
  totalprice: number = 0;
  savedItems: any[] = [];
  address: string = '';

 


  constructor(public cart: CartService, private orderService: OrderService , public shared:SharedService , public route:Router) {}

  quantity:any|null;
  ngOnInit() {
    this.orders = this.cart.getCartItems();
    for (let i = 0; i < this.orders.length; i++) {
      const item = {
        menuItemID: this.orders[i]["menuItemID"]["id"],
        quantity: this.orders[i]["quantity"],
        price: this.orders[i]["menuItemID"]["price"]
      };
      console.log(this.orders[i]);  
      this.savedItems.push(item);
   
    }
  
    this.calculateTotalPrice();
   
  }
  incrementQuantity(item:any) {
    item.quantity++;
    this.calculateTotalPrice();
  }

  decrementQuantity(item:any) {
    if (item.quantity > 1) {
      item.quantity--;
      this.calculateTotalPrice();
    }
  }
  removefromCart(id: any) {
    this.cart.deleteFromCart(id);
  }

  calculateTotalPrice() {
    let totalPrice = 0;
    for (const order of this.orders) {
      totalPrice += order.menuItemID.price * order.quantity;
    }
    this.totalprice = totalPrice;
  }

  placeOrder() {
    const orderData = {
      totalPrice: this.totalprice,
      address: this.address,
      details: this.savedItems,
      restaurantID: this.shared.getcartRestId(), // Add the restaurant ID
      customerID: this.shared.getCustId() // Add the customer ID
    };
console.log(orderData);
    this.orderService.addOrder(orderData).subscribe(
      (data: any) => {
        console.log("Order placed successfully:", data);
        console.log(data);
        this.route.navigate(['confirm-order'])
      },
      (error: any) => {
        console.log("Error placing order:", error);
        // Handle error case
      }
    );
  }
  initial_value:any = null;
  clearCart() {
    this.cart.clearCart();
    localStorage.setItem("cartRestId", this.initial_value);
    // Reset any other relevant variables or properties
  }
  

}
