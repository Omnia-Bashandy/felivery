import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
constructor(public cart:CartService){}
  order:any=[];
  item:any;
  orders:any=this.cart.getCartItems();
  totalprice:any;
  savedItems:any = []
  
  ngOnInit() {
    for (let i = 0; i < this.orders.length; i++) {
      console.log(this.orders[i]);
    
      const item = {
        menuItemID: this.orders[i]["menuItemID"]["id"],
        quantity: this.orders[i]["quantity"],
        price: this.orders[i]["menuItemID"]["price"]
      };
    
      this.savedItems.push(item);
    }
    console.log(this.savedItems);
    
  }
calculateTotalPrice() {
  let totalPrice = 0;
  for (const order of this.order) {
    totalPrice += order.menuItemID.price * order.quantity;
  }
  return totalPrice;
}
removefromCart(id:any){
  this.cart.deleteFromCart(id)
  localStorage.removeItem('order');
  // localStorage.clear();
}
orderCheck(){
  // console.log(orderString);
  console.log(this.order);

}
}

