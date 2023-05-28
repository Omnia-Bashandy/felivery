import { Component  } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { data } from 'jquery';
import { CategoriesService } from 'src/app/Services/categories.service';
// import { Router } from '@angular/router';
import { MenuitemsService } from 'src/app/Services/menuitems.service';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent {
id:string |null = this.shared.getId()
  addnewitem= new FormGroup({
    itemname: new FormControl("",[Validators.min(5),Validators.max(50),Validators.required]),
    category: new FormControl("", Validators.required),
    price:new FormControl("",[Validators.pattern(/^(?=.*[0-9]).{1,3}$/),Validators.required]),
    itemImg:new FormControl(""),
    desc:new FormControl("",[Validators.required,Validators.max(100)]),

  })

  constructor(public myService:MenuitemsService , private shared : SharedService , private categories : CategoriesService){
  }
  selectedCategoryId: string | undefined;

setSelectedCategory() {
  console.log(this.selectedCategoryId); // Output the selected category ID
}

  
  addNewItem(itemnam: string, price: any) {
    const newItem = {
      name: itemnam,
      price: price,
      categoryID: this.selectedCategoryId,
      restaurantID: this.id,
      menuItemImg: "skkfftring"
    };
  
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
    }
  }
  


  cats:any = [];
  ngOnInit(): void {
  this.categories.GetAllCategories().subscribe(
    (data : any) =>{
      console.log(data);
      this.cats = data;
    },
    (err: any) => {
      console.log('Error', err);
    }
  )
  }
}














