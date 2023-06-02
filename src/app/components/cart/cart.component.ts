// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { CartService } from 'src/app/Services/cart.service';
// import { OrderService } from 'src/app/Services/order.service';
// import { SharedService } from 'src/app/Services/shared.service';
// import { Location } from '@angular/common';

// @Component({
//   selector: 'app-cart',
//   templateUrl: './cart.component.html',
//   styleUrls: ['./cart.component.css']
// })
// export class CartComponent implements OnInit {
//   orders: any[] = [];
//   totalprice: number = 0;
//   savedItems: any[] = [];
//   address: string = '';

 


//   constructor(public cart: CartService,
//     private location: Location,
//      private orderService: OrderService , public shared:SharedService , public route:Router) {}

//   quantity:any|null;
//   ngOnInit() {
//     this.orders = this.cart.getCartItems();
//     for (let i = 0; i < this.orders.length; i++) {
//       const item = {
//         menuItemID: this.orders[i]["menuItemID"]["id"],
//         quantity: this.orders[i]["quantity"],
//         price: this.orders[i]["menuItemID"]["price"]
//       };
//       console.log(this.orders[i]);  
//       this.savedItems.push(item);
   
//     }
  
//     this.calculateTotalPrice();
   
//   }
//   incrementQuantity(item:any) {
//     item.quantity++;
//     this.calculateTotalPrice();
//   }

//   decrementQuantity(item:any) {
//     if (item.quantity > 1) {
//       item.quantity--;
//       this.calculateTotalPrice();
//     }
//   }
//   removefromCart(id: any) {
//     this.cart.deleteFromCart(id);
//   }

//   calculateTotalPrice() {
//     let totalPrice = 0;
//     for (const order of this.orders) {
//       totalPrice += order.menuItemID.price * order.quantity;
//     }
//     this.totalprice = totalPrice;
//   }

//   placeOrder() {
//     const orderData = {
//       totalPrice: this.totalprice,
//       address: this.address,
//       details: this.savedItems,
//       restaurantID: this.shared.getcartRestId(), // Add the restaurant ID
//       customerID: this.shared.getCustId() // Add the customer ID
//     };
// console.log(orderData);
//     this.orderService.addOrder(orderData).subscribe(
//       (data: any) => {
//         console.log("Order placed successfully:", data);
//         console.log(data);
//         this.route.navigate(['orderstatus'])
//       },
//       (error: any) => {
//         console.log("Error placing order:", error);
//         // Handle error case
//       }
//     );
//     this.shared.setStatus("pending")
//   }
//   initial_value:any = null;
//   clearCart() {
//     this.cart.clearCart();
//     localStorage.setItem("RestCartId", this.initial_value);
//     // Reset any other relevant variables or properties
//   }

// previousPage()
//  {
//   this.location.back();
// }  
  

// }












import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';
import { OrderService } from 'src/app/Services/order.service';
import { SharedService } from 'src/app/Services/shared.service';
import { Location } from '@angular/common';

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

  backupOrderobject:any; //object that sends into store home if customer press cancel button in pending page


  constructor(public cart: CartService,
    private location: Location,
    private orderService: OrderService ,
    public shared:SharedService , public route:Router) {}

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


  //once clicked checkout button
// placeOrder() {
//     const orderData = {
//       totalPrice: this.totalprice,
//       address: this.address,
//       details: this.savedItems,
//       restaurantID: this.shared.getcartRestId(), // Add the restaurant ID
//       customerID: this.shared.getCustId() // Add the customer ID
//     };
//     console.log(orderData);

//     this.orderService.addOrder(orderData).subscribe(
//       (data: any) => {
//         console.log("Order placed successfully:", data);
//         console.log(data);
//         // this.route.navigate(['/pendingstatus'])

//         // to save data in back up object and send it into pending page
//         this.backupOrderobject = orderData;
//         console.log("back up order data",this.backupOrderobject);
//         this.route.navigate(['/pendingstatus'], { state: { backupOrderObject: this.backupOrderobject } });

//       },
//       (error: any) => {
//         console.log("Error placing order:", error);
//       }
//     );
//     this.shared.setStatus("pending");
    
//   }



// once clicked checkout button
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
      console.log('Order placed successfully:', data);
      console.log(data);
      this.backupOrderobject = orderData;
      console.log('Backup order data', this.backupOrderobject);
      this.route.navigate(['/pendingstatus'], { state: { backupOrderObject: this.backupOrderobject } });
    },
    (error: any) => {
      console.log('Error placing order:', error);
    }
  );
  this.shared.setStatus('pending');
}



initial_value:any = null;
  clearCart() {
    this.cart.clearCart();
    localStorage.setItem("RestCartId", this.initial_value);
    // Reset any other relevant variables or properties
  }



// get previous page anywhere he was
previousPage(){
  this.location.back();
}  
  

}



















// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { CartService } from 'src/app/Services/cart.service';
// import { OrderService } from 'src/app/Services/order.service';
// import { SharedService } from 'src/app/Services/shared.service';
// import { Location } from '@angular/common';
// import { CustomerService } from 'src/app/Services/customer.service';

// @Component({
//   selector: 'app-cart',
//   templateUrl: './cart.component.html',
//   styleUrls: ['./cart.component.css']
// })
// export class CartComponent implements OnInit {
//   orders: any[] = [];
//   totalprice: number = 0;
//   savedItems: any[] = [];
//   address: string = '';
//   quantity: any | null;

//   backupOrderobject: any; //object that sends into store home if customer press cancel button in pending page

//   constructor(
//     public cart: CartService,
//     private location: Location,
//     private orderService: OrderService,
//     public shared: SharedService,
//     public route: Router,
//     private customer:CustomerService,
//   ) {}

//   ngOnInit() {
//     this.orders = this.cart.getCartItems();
//     for (let i = 0; i < this.orders.length; i++) {
//       const item = {
//         menuItemID: this.orders[i].menuItemID.id,
//         quantity: this.orders[i].quantity,
//         price: this.orders[i].menuItemID.price
//       };
//       console.log(this.orders[i]);
//       this.savedItems.push(item);
//     }

//     this.calculateTotalPrice();
//   }

//   incrementQuantity(item: any) {
//     item.quantity++;
//     this.calculateTotalPrice();
//   }

//   decrementQuantity(item: any) {
//     if (item.quantity > 1) {
//       item.quantity--;
//       this.calculateTotalPrice();
//     }
//   }

//   removefromCart(id: any) {
//     this.cart.deleteFromCart(id);
//     this.calculateTotalPrice();
//   }

//   calculateTotalPrice() {
//     let totalPrice = 0;
//     for (const order of this.orders) {
//       totalPrice += order.menuItemID.price * order.quantity;
//     }
//     this.totalprice = totalPrice;
//   }

//   placeOrder() {
//     const orderData = {
//       totalPrice: this.totalprice,
//       address: this.address,
//       details: this.savedItems,
//       restaurantID: this.shared.getcartRestId(),
//       customerID: Number(this.shared.getCustId())
//     };
    
//     console.log(orderData);
//     console.log(orderData.customerID);
//     console.log(orderData.restaurantID);

//     this.orderService.addOrder(orderData).subscribe(
//       (data: any) => {
//         console.log('Order placed successfully:', data);

//         // save that object in backup storage to re use it in store page
//         this.backupOrderobject = orderData;
//         // localStorage.setItem("backupOrderdata",this.backupOrderobject);
//         localStorage.setItem('backupOrderdata', JSON.stringify(this.backupOrderobject));
//         console.log('Backup order data', this.backupOrderobject);
//         this.route.navigate(['/pendingstatus'])
//         //, {
//         //   state: { backupOrderObject: this.backupOrderobject }
//         // });


//       },
//       (error: any) => {
//         console.log('Error placing order:', error);
//         if (error.error && error.error.errors) {
//           console.log('Validation errors:', error.error.errors);
//         }
//       }
//     );
//     this.shared.setStatus('pending');
//     localStorage.setItem('cart', JSON.stringify(""))
//   }
  

//   clearCart() {
//     this.cart.clearCart();
//     localStorage.removeItem('RestCartId');
//     // Reset any other relevant variables or properties
//     this.orders = [];
//     this.totalprice = 0;
//   }

//   previousPage() {
//     this.location.back();
//   }
// }


