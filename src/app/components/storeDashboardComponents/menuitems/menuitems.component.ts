import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuitemsService } from 'src/app/Services/menuitems.service';
import { SharedService } from 'src/app/Services/shared.service';
import { StoreService } from 'src/app/Services/store.service';

@Component({
  selector: 'app-menuitems',
  templateUrl: './menuitems.component.html',
  styleUrls: ['./menuitems.component.css']
})
export class MenuitemsComponent implements OnInit{

  items:any = [];
  id:any = this.shared.getId();

  constructor(public menuservice :MenuitemsService,
    private servicestore: StoreService,
    private shared:SharedService,private router: Router) {}

  ngOnInit(): void {
    this.servicestore.getItemsbyID(this.id).subscribe(
      (data:any)=>{
        console.log(this.id);
          console.log(data);//all items
            if (this.items.restuarantID == this.id) {
              console.log(this.items=data);
            }
            this.items=data;
          },
          (error:any)=>{
            console.log("There is an error ",error);
          } );
        }
  deleteItem(id: any): void {
    this.menuservice.getMenuitemById(id).subscribe()
    this.menuservice.deleteMenuitem(id).subscribe(() => {
      // alert('Item deleted successfully.');
      console.log("Deleteeed");
      
      this.router.navigate(["/store-dashboard/menuitems"]);
    }, error => {
      console.error('Error deleting item:', error);
    });
  }

  newItem: any = {};

  addItem(): void {
    this.menuservice.addmenuitem(this.newItem).subscribe(
      (response) => {
        console.log('Item added successfully.');
        // Reset the form after successful submission
        this.newItem = {};
      },
      (error) => {
        console.error('Error adding item:', error);
      }
    );
  }
}
