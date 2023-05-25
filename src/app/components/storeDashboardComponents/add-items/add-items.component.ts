import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent {
  addnewitem= new FormGroup({
    itemname: new FormControl("",[Validators.min(5),Validators.max(50),Validators.required]),
    category: new FormControl("", Validators.required),
    price:new FormControl("",[Validators.pattern(/^(?=.*[0-9]).{1,3}$/),Validators.required]),
    itemImg:new FormControl(""),
    desc:new FormControl("",[Validators.required,Validators.max(100)]),

  })
  addNewItem(){
    if(this.addnewitem.valid){
    console.log(this.addnewitem.value)
    }
  }
}
