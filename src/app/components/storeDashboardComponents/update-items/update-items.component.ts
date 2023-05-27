import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MenuitemsService } from 'src/app/Services/menuitems.service';

@Component({
  selector: 'app-update-items',
  templateUrl: './update-items.component.html',
  styleUrls: ['./update-items.component.css']
})


export class UpdateItemsComponent implements OnInit{
  edititem: any =[];
  id:any;
  constructor(private formBuilder: FormBuilder, private menuService: MenuitemsService) { }

  ngOnInit() {
    this.edititem = this.formBuilder.group({
      itemname: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      desc: ['', [Validators.required, Validators.maxLength(100)]],
      category: ['', Validators.required],
      price: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2,3})?$/)]],
      rname: [''],
      itemImg:['']
    });
  }

  editItem(): void {
    if (this.edititem.valid) {
      const updatedItem = this.edititem.value;
      // Call the menuService method to update the item
      this.menuService.updateMenuitem(updatedItem).subscribe(
        () => {
          console.log('Item updated successfully.');
          // Additional logic after successful update, e.g., navigation or displaying a success message
        },
        (error) => {
          console.error('Error updating item:', error);
          // Additional error handling, e.g., displaying an error message
        }
      );
    }
  }

  // itemId: any;

  // // {
  // //   "id": 5,
  // //   "name": "btates",
  // //   "price": 90,
  // //   "categoryID": 1,
  // //   "restaurantID": 1,
  // //   "menuItemImg": "string"
  // // }

  // constructor(public route:ActivatedRoute,public service:MenuitemsService) {
  // }
  // ngOnInit(): void {
   
  // }
  // edititem= new FormGroup({
  //   itemname: new FormControl("",[Validators.min(5),Validators.max(50),Validators.required]),
  //   category: new FormControl("", Validators.required),
  //   price:new FormControl("",[Validators.pattern(/^(?=.*[0-9]).{1,3}$/),Validators.required]),
  //   itemImg:new FormControl(""),
  //   desc:new FormControl("",[Validators.required,Validators.max(100)]),
  //   rname:new FormControl("",[Validators.required]),
  // })
  // editItem(){
  //   if(this.edititem.valid){
  //   this.service.updateMenuitem(this.edititem).subscribe(
  //     (data: any) => {
  //       console.log(data);
  //       alert("yaaaay")
  //     },
  //     (err: any) => {
  //       console.log('Error', err);
  //     })}
  // }
}
