import { Component } from '@angular/core';
import { StoreService } from 'src/app/Services/store.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})

// interface RestaurantObj {
//   name: string;
//   description: string;
//   image: Uint8Array;
// }
export class RestaurantsComponent {

  //Pagination
  title = 'pagination';
  POSTS: any;
  page: number =1;
  count: number =0;
  tableSize: number =12;
  tableSizes: any =[5,10,15,20];

  //Custom Data With image Uint8Array
  Restaurants :any = []
  constructor(public myService:StoreService ){
  }

  onTableDataChange(event:any){
    this.page = event;
    this.ngOnInit();
  }

  onTableSizeChange(event:any) : void{
    this.tableSize = event.target.value;
    this.page=1;
    this.ngOnInit();
  }
 
  ngOnInit(): void {

    
    // console.log(this.myService.getAllUsers());
    this.myService.getAllRestaurants().subscribe({
      
      next:(data)=>{

        this.POSTS=data;
        console.log(this.POSTS);
        console.log("exist");

        this.Restaurants = data;
        console.log(this.Restaurants)
      },
      error:(err)=>{console.log(err)},
      // complete:()=>{}
  })
}

exactMatch: any;
notmatch:any;
searchText: string = '';
filteredItems: any[] = [];


filterItems() {
  this.filteredItems = this.Restaurants.filter((data:any) =>
   data.name.toLowerCase().includes(this.searchText.toLowerCase()));
}


updateFilteredItems() {
  this.exactMatch = null; 
}
search() {
  this.exactMatch = this.Restaurants.find((restaurant: any) =>
    
    restaurant.name.toLowerCase().includes(this.searchText)
    //restaurant.name.toLowerCase() === this.searchText.toLowerCase()
  );
  this.notmatch = !this.exactMatch;
}


getrestuarantbyID(){
  
}

iconcolor1: string = "yellow";
iconcolor2: string = 'grey';
iconcolor3: string = 'grey';
iconcolor4: string = 'grey';
iconcolor5: string = 'grey';

selectedStars: number = 0;
Selected(rating: number){
  this.selectedStars = rating;
  if (rating === 1) {
    this.iconcolor1 = 'yellow'; 
    this.iconcolor2 = 'grey'; 
this.iconcolor3 = 'grey';
this.iconcolor4 = 'grey'; 
this.iconcolor5 = 'grey';
    
  } else if (rating === 2) {
    this.iconcolor1 = 'yellow'; 
    this.iconcolor2 = 'yellow'; 
this.iconcolor3 = 'grey';
this.iconcolor4 = 'grey'; 
this.iconcolor5 = 'grey';
  } else if (rating === 3) {
    this.iconcolor1 = 'yellow'; 
    this.iconcolor2 = 'yellow'; 
this.iconcolor3 = 'yellow';
this.iconcolor4 = 'grey'; 
this.iconcolor5 = 'grey'; 
  } else if (rating === 4) {
    this.iconcolor1 = 'yellow'; 
    this.iconcolor2 = 'yellow'; 
this.iconcolor3 = 'yellow';
this.iconcolor4 = 'yellow'; 
this.iconcolor5 = 'grey'; 
  } else if (rating === 5) {
    this.iconcolor1 = 'yellow'; 
    this.iconcolor2 = 'yellow'; 
this.iconcolor3 = 'yellow';
this.iconcolor4 = 'yellow'; 
this.iconcolor5 = 'yellow';
  }
  this.selectedStars = rating;

  console.log(this.selectedStars);
  
}

}