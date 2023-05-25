import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/Services/store.service';

@Component({
  selector: 'app-regestration',
  templateUrl: './regestration.component.html',
  styleUrls: ['./regestration.component.css']
})
export class RegestrationComponent {
  
  // reactive forms
  // const phoneNumberPattern = /^(\+\d{1,3}[- ]?)?\d{10}$/;
  validationsRegister = new FormGroup({
    username: new FormControl("",[Validators.min(8),Validators.max(12),Validators.required]),
    address: new FormControl("",[Validators.max(12),Validators.required]),
    email:new FormControl("",[Validators.email,Validators.required]),
    password:new FormControl("",[Validators.min(8),Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),Validators.required]),
    mobile:new FormControl("",[Validators.required,Validators.pattern(/^(\+01-?)?(\d{11})$/)]),
    desc:new FormControl("",[Validators.required,Validators.min(10)]),
    imgupload:new FormControl(""),
  })
  constructor(public myService:StoreService , private router: Router){

    // console.log(myService.getAllRestaurants.length);
  }

  
  AddRestaurant(discription: string, phone: number, address: string, password: string, remail: string, Rname: string) {
    let newRestaurant ={
      "model":{
      username: Rname,
      email: remail,
      password: password
      },
      "restaurant": {
      name :Rname,
      address: address,
      mobileNumber: phone,
      description: discription,
      storeImg : "abs"
      }
  }

  // {
  //   "model": {
  //     "username": "Mohamad",
  //     "email": "Mohamad@Gmail.com",
  //     "password": "Aasd@123"
  //   },
  //   "restaurant": {
  //     "name": "Mohamad",
  //     "address": "string",
  //     "mobileNumber": 555557777,
  //     "description": "string",
  //     "storeImg": "string"
  //   }
  // }
  if (this.validationsRegister.valid) {
    console.log(this.validationsRegister.value);
    }
    console.log(newRestaurant);
      this.myService.addRestaurant(newRestaurant).subscribe();
      //   this.router.navigate(['/']); 
      alert(`Rest ${Rname} added successfully`)
    }
}


