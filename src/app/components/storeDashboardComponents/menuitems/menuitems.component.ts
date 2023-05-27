import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuitemsService } from 'src/app/Services/menuitems.service';

@Component({
  selector: 'app-menuitems',
  templateUrl: './menuitems.component.html',
  styleUrls: ['./menuitems.component.css']
})
export class MenuitemsComponent implements OnInit{

  items:any = [];

  constructor(public menuservice :MenuitemsService ,private router: Router) {}
  ngOnInit(): void {
    // console.log(this.menuservice.GetAllmenuserved);
      this.menuservice.GetAllmenuserved().subscribe({
       next:(data) =>{
         this.items = data;     
       },
       error:(err)=>{console.log(err)}
     })

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
