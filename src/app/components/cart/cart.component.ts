import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';
import { OrderService } from 'src/app/Services/order.service';
import { SharedService } from 'src/app/Services/shared.service';
import { Location } from '@angular/common';
import { FormControl, Validators } from '@angular/forms';

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
  quantity:any|null;
  amount = 324;

  paypal:any;
  addresss:any;

   @ViewChild('paymentRef', {static: true}) paymentRef!: ElementRef;
  backupOrderobject:any; //object that sends into store home if customer press cancel button in pending page

  refresh(): void {
    window.location.reload();
  }
  constructor(public cart: CartService,
    private location: Location,
    private orderService: OrderService ,
    public shared:SharedService , public route:Router) {}

  ngOnInit() {
    this.addresss = new FormControl("Cairo",[Validators.max(12),Validators.required]),
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
    window.paypal.Buttons(
      {
        style: {
          layout: 'horizontal',
          color: 'blue',
          shape: 'rect',
          label: 'paypal',
        },
      }).render(this.paymentRef.nativeElement);
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
    window.location.reload();
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
     customerID: Number( this.shared.getCustId()) // Add the customer ID
  };
  console.log(orderData);

  this.orderService.addOrder(orderData).subscribe(
    (data: any) => {
      console.log('Order placed successfully:', data);
      console.log(data.id);
      this.cart.clearCart()
      localStorage.removeItem("RestCartId");
      localStorage.setItem("cancelledOrderId" , data.id) 
      this.route.navigate(['/pendingstatus'])
console.log(data.restaurantID);

      localStorage.setItem("RaterestId" , data.restaurantID);
    },
    (error: any) => {
      console.log('Error placing order:', error);
    }
  );
    localStorage.setItem('orderStatus', 'pending');
}

initial_value:any = null;
  clearCart() {
    this.cart.clearCart();
    localStorage.setItem("RestCartId", this.initial_value);
      window.location.reload();
      console.log(localStorage.getItem("RestCartId"));
      
  }
// get previous page
previousPage(){
  this.location.back();
}  
  

}