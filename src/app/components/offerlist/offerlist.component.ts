import { Component, OnInit } from '@angular/core';
import { OffersService } from 'src/app/Services/offers.service';

@Component({
  selector: 'app-offerlist',
  templateUrl: './offerlist.component.html',
  styleUrls: ['./offerlist.component.css']
})
export class OfferlistComponent implements OnInit{

  offers:any;
   constructor(public offersServ:OffersService) {
     
   }
   ngOnInit(): void {
  this.offersServ.GetAlloffers().subscribe({
   next:(data:any) => {console.log(data) 
    this.offers =data},
   error:(err)=> {console.log(err)}
  })
     
 }
}
