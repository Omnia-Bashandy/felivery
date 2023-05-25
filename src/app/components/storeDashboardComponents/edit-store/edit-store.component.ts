import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-store',
  templateUrl: './edit-store.component.html',
  styleUrls: ['./edit-store.component.css']
})
export class EditStoreComponent {
  activeLink: string = 'home';
  
  isActive(link: string): boolean {
    return this.activeLink === link;
  }
  
  setActive(link: string): void {
    this.activeLink = link;
  }
  // validations
    // const phoneNumberPattern = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    validUpdatestore = new FormGroup({
      username: new FormControl("",[Validators.min(8),Validators.max(12),Validators.required]),
      address: new FormControl("",[Validators.max(12),Validators.required]),
      email:new FormControl("",[Validators.email,Validators.required]),
      password:new FormControl("",[Validators.min(8),Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),Validators.required]),
      mobile:new FormControl("",[Validators.required,Validators.pattern(/^(\+01-?)?(\d{11})$/)]),
      desc:new FormControl("",[Validators.required,Validators.min(10)]),
      imgupload:new FormControl(""),
    })
    updateStore(){
      if (this.validUpdatestore.valid) {
        // update logic and go to database
      console.log(this.validUpdatestore.value);
      }
    }
}
