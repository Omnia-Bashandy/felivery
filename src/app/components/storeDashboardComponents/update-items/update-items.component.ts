import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from 'src/app/Services/categories.service';
import { MenuitemsService } from 'src/app/Services/menuitems.service';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-update-items',
  templateUrl: './update-items.component.html',
  styleUrls: ['./update-items.component.css']
})


export class UpdateItemsComponent implements OnInit{
  // editIitem:any;
  // id:any;
  
  iditem:any
  restid:any =this.storeservice.getId();
  constructor(private route:ActivatedRoute, private menuService: MenuitemsService ,private storeservice:SharedService,
    private categoriees:CategoriesService) { }
  // validations
  edititem = new FormGroup({
    itemname: new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
    category: new FormControl("", Validators.required),
    price: new FormControl("", [Validators.required, Validators.pattern(/^\d+(\.\d{1,2,3})?$/)]),
    rname: new FormControl(""),
    itemImg: new FormControl("")
    // desc: new FormControl("", [Validators.required, Validators.maxLength(100)]),
  });
  
  arritems:any
  ngOnInit() {
    this.menuService.getMenuitemById(this.route.snapshot.params["id"]).subscribe({
       next: (data: any) => 
    {
      console.log(data);
      this.iditem = data["id"]
    },
      error: (err) => {
      console.log(err); 
    },
}); 



this.categoriees.getCategoryRestid(this.restid).subscribe(
  (data : any) =>{
    console.log(data);
    this.cats = data;
  },
  (err: any) => {
    console.log('Error', err);
  }
)
 }

 cats:any=[];
 selectedCategoryId: string | undefined;

 setSelectedCategory() {
   console.log(this.selectedCategoryId); // Output the selected category ID
 }

editItem(itemname: string, price: any) {
  const updatedItem = {
    id: this.iditem,
    name: itemname,
    categoryID:  this.selectedCategoryId,
    price: price,
    restaurantID: 1,
    menuItemImg: "bbbb"
  };

  console.log(updatedItem);

  this.menuService.updateMenuitem(updatedItem).subscribe(
    (data) => {
      console.log(data);
      alert("Updated successfully");
    },
    (error) => {
      console.error(error);
      alert("Failed to update item");
    }
  );
}

}