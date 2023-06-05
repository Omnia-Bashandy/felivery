import { Component, OnInit } from '@angular/core';
import { OffersService } from 'src/app/Services/offers.service';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-storeoffers',
  templateUrl: './storeoffers.component.html',
  styleUrls: ['./storeoffers.component.css']
})
export class StoreoffersComponent implements OnInit {
  
  ID:any = this.shared.getId() ;
  offers:any=[];
   constructor(public offersServ:OffersService,public shared:SharedService) {
     
   }
   ngOnInit(): void {
  this.offersServ.GetAlloffers().subscribe({
   next:(data:any) => {console.log(data) 
    
   console.log(data[0].restaurantID)
   for (let i =0;i<data.length;i++){
    if (data[i].restaurantID==this.ID){
      this.offers.push(data[i]) 
    }
   }
   console.log(this.offers)
  },
   error:(err)=> {console.log(err)}
   })
 }
}

