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
  item:any
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
  });
  
  arritems:any
  ngOnInit() {
    
    this.iditem = this.route.snapshot.params["id"];
    
    this.menuService.getMenuitemById(this.iditem).subscribe({
      next: (data: any) => 
    {
      this.item = data
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
image:any = false;
editItem(itemname: string, price: any) {
  const updatedItem = {
    id: this.iditem,
    name: itemname,
    categoryID:  this.selectedCategoryId,
    price: price,
    restaurantID: this.restid,
    menuItemImg: this.item.menuItemImg
  };

  console.log(updatedItem);

  this.menuService.updateMenuitem(updatedItem).subscribe(
    (data) => {
      console.log(data);
      this.image = true;
    },
    (error) => {
      console.error(error);
      alert("Failed to update item");
    }
    );
    //  image
    setTimeout(() => {      
      if (this.image == true) {
        this.menuService.uploadImg(this.selectedFile, this.restid ,itemname).subscribe({ 
          next(data : any) {
            console.log(data);
          },error: (err) => {
            console.log(err);
            console.log(err.error["text"]);
            alert("Updated successfully");
            window.location.reload();
            
          }
        })
      }
    }, 100);

}
selectedFile: FormData | undefined ;

  onUpload(event: any){
    if(event.target.files.length > 0) {
      const file = event.target.files[0];
            if(file.type == 'image/png' || file.type == 'image/jpeg' || file.type == 'image/jpg') {
        const formData = new FormData();
        formData.append('file',file);
        this.selectedFile = formData;
      } else {
        alert('Please select an Image in either .jpg, .jpeg, or .png forms!');
      }
    }
}
}