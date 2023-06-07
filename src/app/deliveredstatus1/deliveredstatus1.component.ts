import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CartService } from 'src/app/Services/cart.service';
import { OrderService } from 'src/app/Services/order.service';
import { SharedService } from 'src/app/Services/shared.service';
import { StoreService } from 'src/app/Services/store.service';
import { NgbRatingModule} from '@ng-bootstrap/ng-bootstrap'; 




@Component({
  selector: 'app-deliveredstatus1',
  templateUrl: './deliveredstatus1.component.html',
  styleUrls: ['./deliveredstatus1.component.css']
})
export class Deliveredstatus1Component implements OnInit {
  
  ratingcontrol=new FormControl(0);
  Cart:any;
  id = localStorage.getItem("RaterestId")
  ratingvalue :any;
  disabled:any =false;

  constructor(private storeService:StoreService,private sharedService:SharedService,private cart:CartService) {

  }
  ngOnInit(): void {
    this.Cart = this.cart.getCartItems();
    console.log(this.Cart[0].menuItemID.restaurantID);
    console.log(this.Cart[0]);
    this.GetRating()
    console.log(this.ratingcontrol.value);
  }

  GetRating(){
    console.log(this.id);
    console.log(this.ratingcontrol.value);
    
    this.storeService.SetRate(this.id, this.ratingcontrol.value).subscribe(
      (data: any) => {
        this.ratingvalue = this.ratingcontrol.value
  },
      (error: any) => {
        console.log("There is an error", error); 
      }
    );
    }
    getdisabletrue(){
      this.disabled =true
    }

}
