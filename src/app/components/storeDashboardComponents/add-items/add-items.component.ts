import { Component  } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from 'src/app/Services/categories.service';
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
selectedFile: FormData | undefined ;
refresh(): void {
  window.location.reload();
}
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
  imgUrl:any;
  addNewItem(itemnam: string, price: any) {
    setInterval(this.refresh,500)
    const newItem = {
      name: itemnam,
      price: price,
      categoryID: this.selectedCategoryId,
      restaurantID: this.id,
      menuItemImg : this.imgUrl || "https://localhost:44309//uploads/common/noimg.png"
    };
  
  if (this.addnewitem.valid) {

    this.myService.addmenuitem(newItem).subscribe(
    (data: any) => {
      console.log(data);
      console.log(data["restaurant"]["name"]);
      console.log("message 2");

      },
      (err: any) => {
        console.log('Error', err);
      }
    );  

    //  image
    setTimeout(() => {   
      this.myService.uploadImg(this.selectedFile, this.id ,itemnam).subscribe({ 
        //this.myService.uploadImg( Rname ).subscribe({ 
          next(data : any) {
            console.log(data);
            console.log("message 1");
          },error: (err) => {
            console.log(err);
            this.imgUrl = err.error["text"]
            console.log(err.error["text"]);
          }
        }) 
    }, 100);
    }  
  }
  cats:any = [];
  ngOnInit(): void {
  this.categories.getCategoryRestid(this.id).subscribe(
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














