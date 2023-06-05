import { Component } from '@angular/core';
import { OffersService } from 'src/app/Services/offers.service';

@Component({
  selector: 'app-popularoffer',
  templateUrl: './popularoffer.component.html',
  styleUrls: ['./popularoffer.component.css']
})
export class PopularofferComponent {
  offers:any;
  isoffer:any;
   constructor(public offersServ:OffersService) {  
   }
   ngOnInit(): void {
  this.offersServ.GetAlloffers().subscribe({
   next:(data:any) => {console.log(data) 
    this.offers =data ;
    // this.isoffer =this.offers.isOffer
    // console.log(this.isoffer);
    for (let index = 0; index < this.offers.length; index++) {
      const element = this.offers[index];
      this.isoffer =this.offers.isOffer
      console.log(this.isoffer[index]);
    }
  },
   error:(err)=> {console.log(err)}
  })
     
     
 }

}
