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
    // desc: new FormControl("", [Validators.required, Validators.maxLength(100)]),
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
   //  image
   this.menuService.uploadImg(this.selectedFile, this.restid ,itemname).subscribe({ 
    //this.myService.uploadImg( Rname ).subscribe({ 
      next(data : any) {
        console.log(data);
      },error: (err) => {
        console.log(err);
        // this.imgUrl = err.error["text"]
        console.log(err.error["text"]);
        
      }
    })
}
selectedFile: FormData | undefined ;

  onUpload(event: any){
    if(event.target.files.length > 0) {
      const file = event.target.files[0];
      //if(event.target.files.length == 1 && (file.type == 'image/png' || file.type == 'image/jpeg' || file.type == 'image/jpg')) {
      if(file.type == 'image/png' || file.type == 'image/jpeg' || file.type == 'image/jpg') {
        const formData = new FormData();
        formData.append('file',file);
        //this.selectedFile = file;
        this.selectedFile = formData;
      } else {
        alert('Please select an Image in either .jpg, .jpeg, or .png forms!');
      }
    }
}
}