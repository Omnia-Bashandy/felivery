// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { MenuitemsService } from 'src/app/Services/menuitems.service';
// import { SharedService } from 'src/app/Services/shared.service';
// import { StoreService } from 'src/app/Services/store.service';

// @Component({
//   selector: 'app-restauindivual',
//   templateUrl: './restauindivual.component.html',
//   styleUrls: ['./restauindivual.component.css']
// })
// export class RestauindivualComponent implements OnInit {
//   storeID: any;
//   restaurant: any;
//   menus: any[] = [];
  
//   constructor(
//     private storeService: StoreService,
//     private menuitemsService: MenuitemsService,
//     private route: ActivatedRoute,
//     private router: Router
//   ) {}
  
//   ngOnInit(): void {
//     this.route.params.subscribe(params => {
//       this.storeID = params['id'];
  
//       // Fetch restaurant by ID
//       this.storeService.getRestaurantById(this.storeID).subscribe(
//         (data) => {
//           this.restaurant = data;
//         },
//         (error) => {
//           console.log('Error fetching restaurant:', error);
//         }
//       );
//     });
  
//     this.menuitemsService.GetAllmenuserved().subscribe(
//       (data: any) => {
//         console.log(data);
//         for (let item of data) {
//           if (Number(item.restaurantID) === Number(this.storeID)) {
//             this.menus.push(item);
//           } else {
//             console.log("Not equal");
//           }
//         }
//       },
//       (error: any) => {
//         console.log('Error fetching menus:', error);
//       }
//     );
//   }
  

// }  







import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuitemsService } from 'src/app/Services/menuitems.service';
import { SharedService } from 'src/app/Services/shared.service';
import { StoreService } from 'src/app/Services/store.service';

@Component({
  selector: 'app-restauindivual',
  templateUrl: './restauindivual.component.html',
  styleUrls: ['./restauindivual.component.css']
})
export class RestauindivualComponent implements OnInit {
  storeID: any;
  restaurant: any;
  menus: any[] = [];
  
  constructor(
    private storeService: StoreService,
    private menuitemsService: MenuitemsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.storeID = params['id'];
  
      // Fetch restaurant by ID
      this.storeService.getRestaurantById(this.storeID).subscribe(
        (data) => {
          this.restaurant = data;
        },
        (error) => {
          console.log('Error fetching restaurant:', error);
        }
      );
    });
  
    // this.menuitemsService.GetAllmenuserved().subscribe(
    //   (data: any) => {
    //     console.log(data);
    //     for (let item of data) {
    //       if (Number(item.restaurantID) === Number(this.storeID)) {
    //         this.menus.push(item);
    //       } else {
    //         console.log("Not equal");
    //       }
    //     }
    //   },
    //   (error: any) => {
    //     console.log('Error fetching menus:', error);
    //   }
    // );

       // get items by restID
       this.storeService.getItemsbyID(this.storeID).subscribe(
        (data:any)=>{
              console.log(data);//all items
              this.menus=data;
            },
            (error:any)=>{
              console.log("There is an error ",error); 
            }
      );
  }
  

}  