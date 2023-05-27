import { Component } from '@angular/core';
import { MenuitemsService } from 'src/app/Services/menuitems.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-tryadditem',
  templateUrl: './tryadditem.component.html',
  styleUrls: ['./tryadditem.component.css']
})
export class TryadditemComponent  {







  addnewitem= new FormGroup({
    itemname: new FormControl("",[Validators.min(5),Validators.max(50),Validators.required]),
    category: new FormControl("", Validators.required),
    price:new FormControl("",[Validators.pattern(/^(?=.*[0-9]).{1,3}$/),Validators.required]),
    itemImg:new FormControl(""),
    desc:new FormControl("",[Validators.required,Validators.max(100)]),

  })

  constructor(public myService:MenuitemsService){
  }

addNewItem(itemnam: string, categoryname: any, price: any,rname:any) {
    // {
    //   "name": "string",
    //   "price": 0,
    //   "categoryID": 1,
    //   "restaurantID": 1,
    //   "menuItemImg": "string"
    // }
    let newItem={
      name: itemnam,
      price: price,
      categoryID: categoryname,
      restaurantID: rname,
     menuItemImg: "skkfftring"
      }
  
  if (this.addnewitem.valid) {
    console.log(newItem);
      this.myService.addmenuitem(newItem).subscribe(
        (data: any) => {
                  console.log(data);
                },
                (err: any) => {
                  console.log('Error', err);
                }
      );

      // }
      // );
      // this.router.navigate(['/menuitems']); 
      // alert(`${itemnam} added successfully`);
    }
  }

  
  // newItem: any = {};


  // addItem(name: string, category: any, price: any,rest:any): void {
     
  //     let newItem={
  //       name: name,
  //       price: price,
  //       categoryID: category,
  //       restaurantID: rest,
  //       }
  //   this.myService.addmenuitem(this.newItem).subscribe(
  //     (response) => {
  //       console.log('Item added successfully.');
  //       // Reset the form after successful submission
  //       this.newItem = {};
  //     },
  //     (error) => {
  //       console.error('Error adding item:', error);
  //     }
  //   );
  // }
}




