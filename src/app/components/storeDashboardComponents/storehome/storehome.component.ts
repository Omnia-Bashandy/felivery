import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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


  constructor(private sharedService: SharedService,
    private orderservice:OrderService,private servicestore:StoreService,
    private route:ActivatedRoute,private category:CategoriesService) {}

  ngOnInit() {
    // Get the stored id from the shared service
    this.id = this.sharedService.getId(); 
    console.log(this.id);
    

    this.orderservice.getOrdersbyRestID(this.id).subscribe(
      (data:any)=>{
            console.log(data);//all orders 
            this.orders=data;
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

    this.category.GetAllCategories().subscribe(
      (data: any) => {
        console.log(data);
        this.categories = data;
        for (let c of data) {
          if (c.categoryID=== Number(this.id)) {
            this.items.push(c);
          } else {
            console.log("Not equal");
          }
        }
      },
      (err: any) => {
        console.log('Error', err);
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
    

    // progress bar
    this.deliveredPercentage()
    // this.getorderbyID();
    // this.aproveOrderstatus();

  }

  deliveredPercentage() {
    const totalOrders = +this.Deliverd + +this.pendingOrders;
    const deliveryPercentage = (+this.Deliverd / +totalOrders) * 100;
    this.roundedPercentage = +deliveryPercentage.toFixed(0);
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
    this.sharedService.setStatus("done");
console.log(typeof Oid);
console.log(+Oid);

  }

  cancelOrderstatus(){
    this.sharedService.setStatus("cancle");
  }

  removeOrderFromTable() {
    // Find the index of the cancelled order in the array
    // const cancelledIndex = this.orders.findIndex(order => order.status === 'cancel');
    // Remove the order from the array
    // if (cancelledIndex !== -1) {
    //   this.orders.splice(cancelledIndex, 1);
    // }
  }


}
