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

  OrderId:any = localStorage.getItem("cancelledOrderId");

  order:any

  items:any;
  constructor(private sharedserv: SharedService ,
    private route:Router,
    private router:ActivatedRoute,
    private orderservice: OrderService,
    private cart:CartService,
    private orderCancellationService: CanclledordersService) {}


  ngOnInit() {
}

  cancelPeendingorder(){
    console.log(this.OrderId);
    
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
    this.route.navigate(['/cancelusrstatus'])

}


}
