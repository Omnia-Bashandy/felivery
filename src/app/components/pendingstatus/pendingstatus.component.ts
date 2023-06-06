import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CanclledordersService } from 'src/app/Services/canclledorders.service';
// import { CanclledordersService } from 'src/app/Services/canclledorders.service';
import { CartService } from 'src/app/Services/cart.service';
import { OrderService } from 'src/app/Services/order.service';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-pendingstatus',
  templateUrl: './pendingstatus.component.html',
  styleUrls: ['./pendingstatus.component.css']
})
export class PendingstatusComponent implements OnInit{

  done: boolean = false;
  pending: boolean = false;
  cancel: boolean = false;

  OrderId:any;
  order:any

  items:any;
  constructor(private sharedserv: SharedService ,
    private route:Router,
    private router:ActivatedRoute,
    private orderservice: OrderService,
    private cart:CartService,
    private orderCancellationService: CanclledordersService) {}

    // backupOrderObject:any;

  ngOnInit() {
    // const state = this.route.getCurrentNavigation()?.extras.state;
    // if (state && state['backupOrderObject']) {
    //   this.backupOrderObject = state['backupOrderObject'];
    //   console.log("Backup Order Object:", this.backupOrderObject);
    // } else {
    //   console.log("Backup Order Object not found.");
    // }
// fetch order by id to remove it 
    // this.OrderId = this.router.params.subscribe(params => {
    //   const orderid = params['id'];
    // this.orderservice.getOrderById(orderid).subscribe(
    //   (data)=>{
    //     this.order=data
    //     console.log("this order id",this.order);
    //     console.log(data);
    //     console.log(this.order["id"]);
    //   }
    //   );
    // });

    // this.OrderId = this.router.params.subscribe(params => {
    //   const orderId = params['id'];
  
    //   // Fetch the order from the cart by ID
    // this.order = this.cart.getCartItems().find((item: any) => item.menuItemID.id === orderId);
  
    //   if (this.order) {
    //     console.log("This order:", this.order);
    //     console.log("Order ID:", this.order.menuItemID.id);
    //   } else {
    //     console.log("Order not found in cart.");
    //   }
    // });

    // this.OrderId = this.router.params.subscribe(params => {
    //   const orderid = params['id'];
    // this.cart.getOrderById(orderid).subscribe(
    //   (data)=>{
    //     this.order=data
    //     console.log("this order id",this.order);
    //     console.log(data);
    //     console.log(this.order["id"]);
    //   }
    //   );
    // });

  //  this.items =  this.cart.getCartItems()
    // const status = this.sharedserv.getStatus();
}

  cancelPeendingorder(){
    const backupOrderData = localStorage.getItem('backupOrderdata');
  
    if (backupOrderData) {
      const backupOrderObject = JSON.parse(backupOrderData);
      this.orderCancellationService.setCanceledOrderData(backupOrderObject);
    }
    this.orderservice.deleteOrder(this.OrderId).subscribe(
      (data:any)=>{
        console.log(data);//all items
        
      },
      (error:any)=>{
        console.log("There is an error ",error);
      }
  )
    this.sharedserv.setStatus('cancelcustomer');
    alert("Your cancellation sent");
    this.route.navigate(['/'])

}


}
