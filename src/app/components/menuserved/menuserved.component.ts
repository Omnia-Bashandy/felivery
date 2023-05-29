import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuitemsService } from 'src/app/Services/menuitems.service';

@Component({
  selector: 'app-menuserved',
  templateUrl: './menuserved.component.html',
  styleUrls: ['./menuserved.component.css']
})
export class MenuservedComponent implements OnInit{

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
  // deleteItem(id: any): void {
  //   this.menuservice.deleteMenuitem(id).subscribe(() => {
  //     console.log('Item deleted successfully.');
  //     this.router.navigate(["/menuserved"]);
  //   }, error => {
  //     console.error('Error deleting item:', error);
  //   });
  // }

  

  
  // goToItemDetails(itemId: any){
  //   this.menuservice.getMenuitemById(itemId).subscribe((items) => {
  //     this.router.navigate(['/order', itemId]);
  //   });
  // }
}
