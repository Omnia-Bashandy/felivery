import { Component } from '@angular/core';
import { parse } from '@fortawesome/fontawesome-svg-core';
import { data } from 'jquery';
import { OffersService } from 'src/app/Services/offers.service';
import { StoreService } from 'src/app/Services/store.service';

@Component({
  selector: 'app-popularoffer',
  templateUrl: './popularoffer.component.html',
  styleUrls: ['./popularoffer.component.css']
})
export class PopularofferComponent {
  offers:any;
  isoffer:any;

   constructor(public offersServ:OffersService , private stor : StoreService) {  

   }
   ngOnInit(): void {
  this.offersServ.GetAlloffers().subscribe({
   next:(data:any) => {console.log(data) 
    this.offers =data ;
   
    
    for (let index = 0; index < this.offers.length; index++) {
      const element = this.offers[index];
      this.isoffer =this.offers.isOffer
      console.log(this.isoffer[index]);
      
      console.log(this.offers.restaurantID);
      

      
    }
  },
    error:(err)=> {console.log(err)}
  })
  }


}
