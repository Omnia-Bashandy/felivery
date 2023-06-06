import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CartService } from 'src/app/Services/cart.service';
import { OrderService } from 'src/app/Services/order.service';
import { SharedService } from 'src/app/Services/shared.service';
import { StoreService } from 'src/app/Services/store.service';
import { NgbRatingModule} from '@ng-bootstrap/ng-bootstrap'; 





@Component({
  selector: 'app-deliveredstatus',
  templateUrl: './deliveredstatus.component.html',
  styleUrls: ['./deliveredstatus.component.css'],




})


export class DeliveredstatusComponent implements OnInit {

  ratingcontrol=new FormControl(0);
  Cart:any;
  id:any;
  ratingvalue :any;
  constructor(private storeService:StoreService,private sharedService:SharedService,private cart:CartService) {

  }
  ngOnInit(): void {
    this.Cart = this.cart.getCartItems();
    console.log(this.Cart[0].menuItemID.restaurantID);
    this.id= this.Cart[0].menuItemID.restaurantID

  
  }
  

  GetRating(){
    this.storeService.SetRate(this.id, this.ratingcontrol.value).subscribe(
      (data: any) => {
  console.log(this.ratingcontrol.value);
  },
      (error: any) => {
        console.log("There is an error", error); 
      }
    );
    }


}
