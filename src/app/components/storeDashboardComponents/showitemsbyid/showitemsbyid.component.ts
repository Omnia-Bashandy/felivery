import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { data, param } from 'jquery';
import { CategoriesService } from 'src/app/Services/categories.service';

import { MenuitemsService } from 'src/app/Services/menuitems.service';

@Component({
  selector: 'app-showitemsbyid',
  templateUrl: './showitemsbyid.component.html',
  styleUrls: ['./showitemsbyid.component.css']
})
export class ShowitemsbyidComponent {
  items:any|undefined = [];
  // category:any;
  ID:any | undefined 
  item : any 

// ...

goBack(): void {
  this.location.back();
}

  constructor(private location: Location , public route: ActivatedRoute,private Service:CategoriesService, private menu:MenuitemsService) { 
    }
    ngOnInit() {
      this.ID = this.route.snapshot.params["id"];
      console.log(this.ID);

      this.menu.GetAllmenuserved().subscribe(
        (data: any) => {
          // Log the data to the console
          console.log(data);
      
          // Iterate over the data array using a for loop
          for (let item of data) {
            
            if (Number(item.categoryID) == this.ID) {
            
              this.items.push(item);
            } else {
              console.log("Not equal");
            }
          }
        },
        (err: any) => {
          console.log('Error', err);
        }
      );
      
      
    }

}
