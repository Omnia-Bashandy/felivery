import { Component } from '@angular/core';
import { SharedService } from 'src/app/Services/shared.service';
import { StoreService } from 'src/app/Services/store.service';

@Component({
  selector: 'app-storesetting',
  templateUrl: './storesetting.component.html',
  styleUrls: ['./storesetting.component.css']
})
export class StoresettingComponent {
  restaurantData:any;
  id!: string | null;

  constructor(private sharedService: SharedService , public myService:StoreService ) {}

  ngOnInit() {
    this.id = this.sharedService.getId();

    // Get the stored id from the shared service
    console.log(this.id);
    this.myService.getRestaurantById(this.id).subscribe({
      next:(data)=>{
              this.restaurantData = data;
              console.log(data)
              console.log(this.restaurantData)
              console.log(this.restaurantData.address)
              console.log(this.restaurantData.storeImg)
              this.sharedService.setName(this.restaurantData.name);
            },
            error:(err)=>{console.log(err)},
    })
  }
  
  
}
