import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CanclledordersService } from 'src/app/Services/canclledorders.service';
import { CartService } from 'src/app/Services/cart.service';
import { CategoriesService } from 'src/app/Services/categories.service';
import { OrderService } from 'src/app/Services/order.service';
import { SharedService } from 'src/app/Services/shared.service';
import { StoreService } from 'src/app/Services/store.service';

@Component({
  selector: 'app-storehome',
  templateUrl: './storehome.component.html',
  styleUrls: ['./storehome.component.css']
})

export class StorehomeComponent {
  id!: string | null;
  orders:any=[];
  items:any=[];
  status:boolean = false;
  categories:any=[];
  totalEarn:any;
  Deliverd:any;
  pendingOrders:any;
  orderName:any; //to save name on it
  orderId:any;//to get order name by using it
  roundedPercentage:any;
  restuDetails:any

  backupdatacheckout:any;

  feedbackExist:any = false;
  cancledExist:any = false;

  constructor(private sharedService: SharedService,
    private orderservice:OrderService,private servicestore:StoreService,
    private route:ActivatedRoute,private category:CategoriesService,
    private cart:CartService,
    private orderCancellationService:CanclledordersService) {
      this.servicestore.listen().subscribe((m:any)=>{
        console.log(m);
        this.refresh();
        
      })
    }

    refresh(): void {
      window.location.reload();
    }

  ngOnInit() {

    // Get the stored id from the shared service
    this.id = this.sharedService.getId(); 
    console.log(this.id);
    

    this.orderservice.getOrdersbyRestID(this.id).subscribe(
      (data:any)=>{
            console.log(data);//all orders 
            this.orders=data;
            console.log(this.orders,"fgdffghfghfghgdfgdfg"); 
          },
          (error:any)=>{
            console.log("There is an error ",error); 
          }
    )

    this.servicestore.getItemsbyID(this.id).subscribe(
      
      (data:any)=>{
            console.log(data);//all items
            this.items=data;
              

          },
          (error:any)=>{
            console.log("There is an error ",error); 
          }
          
    );

    // get total earning by rest id
    this.servicestore.gettotalbyID(this.id).subscribe(
      (data:any)=>{
            console.log(data);//total Earn
            this.totalEarn=data;
          },
          (error:any)=>{
            console.log("There is an error ",error); 
          }
    );
    // get all pending orders
    this.orderservice.getPending(this.id).subscribe(
      (data:any)=>{
            console.log(data);//pending
            this.pendingOrders=data;
          },
          (error:any)=>{
            console.log("There is an error ",error); 
          }
    );
    // get all deliverd Orders
    this.orderservice.getDelivered(this.id).subscribe(
      (data:any)=>{
            console.log(data);//pending
            this.Deliverd=data;
          },
          (error:any)=>{
            console.log("There is an error ",error); 
          }
    );


    // get all categories by rest id

   // this.category.GetAllCategories().subscribe(
   //   (data: any) => {
     //   console.log(data);
     //   this.categories = data;
     //   for (let c of data) {
       //   if (c.categoryID=== Number(this.id)) {
        //    this.items.push(c);
       //   } else {
          //  console.log("Not equal");
         
       //   }
     //   }

// get all categories by rest id
this.category.getCategoryRestid(this.id).subscribe(
  (data:any)=>{
        console.log(data);//all items
        this.categories=data;
        console.log("these are our damn categories: " , this.categories);
        
      },
      (error:any)=>{
        console.log("There is an error ",error); 
      }
);


    // resturant details
     this.servicestore.getRestaurantById(this.id).subscribe(
      (data:any)=>{
        this.restuDetails = data;
        // this.restuAddrs= this.restuDetails.address;
        
        console.log("retsurant details",data.address);
        
      }
    )
    
    this.backupdatacheckout = this.orderCancellationService.getCanceledOrderData();

    if (this.backupdatacheckout) {
      // Perform any necessary actions with the canceled order data

      console.log('Canceled order data:', this.backupdatacheckout);
      this.cancledExist = true
    }

    // progress bar
    // this.getorderbyID();
    // this.aproveOrderstatus();

  }

  deliveredPercentage() {
    const totalOrders = +this.Deliverd + +this.pendingOrders;
    
    
    this.Deliverd = (+this.Deliverd  *100)/ totalOrders
    const deliveryPercentage = (+this.Deliverd / +totalOrders) * 100;
    this.roundedPercentage = +deliveryPercentage.toFixed(500);
    console.log("This is the delivery bar:", +this.roundedPercentage);


  }

  
//  getorderbyID(){
//   // this.orderId = this.orderservice.getOrderById(id).subscribe(
//   //   (response: any) => {
//   //         console.log(response);
//   //         console.log(this.orderId);
          
//   //       },
//   // )
//   this.orderId = this.route.params.subscribe(params => {
//     const orderid = params['id'];
//     this.orderservice.getOrderById(orderid).subscribe(
//       (data)=>{
//       this.order=data
//       console.log("this . item order id",this.order.id);
//       console.log(data);
//       console.log(this.order["id"]);
//       }
//       );
//   });
//  }

  aproveOrderstatus(Oid:number) {
    this.orderservice.updateDonestatus(Oid).subscribe(
      (response: any) => {
        console.log(response);
        // this.orderName = response.name;
        // console.log(this.orderName);
      },
      (error: any) => {
        console.log('Error retrieving order:', error);
      }
    );
    this.sharedService.setStatus('done');
console.log(typeof Oid);
console.log(+Oid);

this.servicestore.filter('Register click')

  }

  // aproveOrderstatus(Oid:number) {
  //   this.orderservice.updateDonestatus(Oid).subscribe(
  //     (response: any) => {
  //       console.log(response);
  //       // this.orderName = response.name;
  //       // console.log(this.orderName);
  //     },
  //     (error: any) => {
  //       console.log('Error retrieving order:', error);
  //     }
  //   );
  //   this.sharedService.setStatus("done");
  //   this.cart.deleteFromCart(Number(Oid));
  //   console.log(typeof Oid);
  //   console.log(+Oid);
  // }

  // cancelOrderstatus(){
  //   this.sharedService.setStatus("cancle");
  // }
  
  cancelOrderstatus(Oid: any) {
    setInterval(this.refresh,50)
    const cancelledIndex = this.orders.findIndex((order: any) => order.id === Oid);
    console.log(cancelledIndex);
    
    if (cancelledIndex !== -1) {
      this.orders.splice(cancelledIndex, 1);
    }
    const storedOrders = localStorage.getItem('orders');
    if (storedOrders) {
      const orders = JSON.parse(storedOrders);
      const updatedOrders = orders.filter((order: any) => order.id !== Oid);
      localStorage.setItem('orders', JSON.stringify(updatedOrders));
    }
    this.sharedService.setStatus('cancel');
    this.cart.deleteFromCart(Oid);
    this.orderservice.deleteOrder(Oid).subscribe(
      (data:any)=>{
        console.log(data);//all items
        
      },
      (error:any)=>{
        console.log("There is an error ",error);
      }
  )
  
  }

}
