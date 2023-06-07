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
    // private sharedserv = sharedService,
    private orderCancellationService:CanclledordersService) {
      this.servicestore.listen().subscribe((m:any)=>{
        console.log(m);
        this.refresh();
        
      })
    }

    refresh(): void {
      window.location.reload();
    }
    finishedOrders:any;

  ngOnInit() {

    // Get the stored id from the shared service
    this.id = this.sharedService.getId(); 
    console.log(this.id)

    this.orderservice.getOrdersbyRestID(this.id).subscribe(
      (data:any)=>{
            console.log(data);//all orders 
            this.orders=data;
            console.log(this.orders); 
          },
          (error:any)=>{
            console.log("There is an error ",error); 
          }
    )
    //finished orders
    this.orderservice.getFinishedOrders(this.id).subscribe({
      next:(data:any)=>{
        console.log(data);
        console.log(this.id);
        this.finishedOrders = data
        console.log(this.finishedOrders);
        
    },
    error(err) {
        console.log(err);
        
    },
  })

    //get menu items by rest id 
    this.servicestore.getItemsbyRestID(this.id).subscribe(
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
            // console.log(data);//pending
            this.Deliverd=data;
          },
          (error:any)=>{
            console.log("There is an error ",error); 
          }
    );

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
)

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

    
  
  orderDetails : any;
  selectOrder(currentid:any) {
    this.orderservice.getOrderById(currentid).subscribe(
      (data:any)=>{
        console.log(data.details);
        this.orderDetails = data.details
        for (let index = 0; index < this.orderDetails.length; index++) {
          const element = this.orderDetails[index];
          console.log("item "+element.menuItem.name);
        }
        
    })
  }

  deliveredPercentage() {
    const totalOrders = +this.Deliverd + +this.pendingOrders;
    this.Deliverd = (+this.Deliverd  *100)/ totalOrders
    const deliveryPercentage = (+this.Deliverd / +totalOrders) * 100;
    this.roundedPercentage = +deliveryPercentage.toFixed(500);
    console.log("This is the delivery bar:", +this.roundedPercentage);


  }

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
    //localStorage.setItem('orderStatus', 'done');
console.log(typeof Oid);
console.log(+Oid);

this.servicestore.filter('Register click')

  }
  
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
    //localStorage.setItem('orderStatus', 'cancel');
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
