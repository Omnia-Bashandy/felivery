import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-items',
  templateUrl: './update-items.component.html',
  styleUrls: ['./update-items.component.css']
})
export class UpdateItemsComponent {
  edititem= new FormGroup({
    itemname: new FormControl("",[Validators.min(5),Validators.max(50),Validators.required]),
    category: new FormControl("", Validators.required),
    price:new FormControl("",[Validators.pattern(/^(?=.*[0-9]).{1,3}$/),Validators.required]),
    itemImg:new FormControl(""),
    desc:new FormControl("",[Validators.required,Validators.max(100)]),
  })
  editItem(){
    if(this.edititem.valid){
    console.log(this.edititem.value)
    }
  }
}
