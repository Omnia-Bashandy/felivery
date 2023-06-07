
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/Services/categories.service';
import { SharedService } from 'src/app/Services/shared.service';


@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent {
 addcat= new FormGroup({
  categoryname: new FormControl("",[Validators.min(5),Validators.max(50),Validators.required]),
  })
  constructor(public myService:CategoriesService , private route:Router , public shared:SharedService){
  }
  id = this.shared.getId()
  refresh(): void {
    window.location.reload();
  }
Addcat(categoryname: string) {
  setInterval(this.refresh,50)
    let newItem={
      name: categoryname,
      restaurantID : this.id
      }
  if (this.addcat.valid) {
    console.log(newItem);
      this.myService.addCategory(newItem).subscribe(
        (data: any) => {
                  console.log(data);
                  alert(`${categoryname} added successfully`)
                  this.route.navigate(['/store-dashboard/categories']);
                },
                (err: any) => {
                  console.log('Error', err);
                }
      );
    }
  }
}
