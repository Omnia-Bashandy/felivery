import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/Services/store.service';

@Component({
  selector: 'app-regestration',
  templateUrl: './regestration.component.html',
  styleUrls: ['./regestration.component.css']
})
export class RegestrationComponent {
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
    console.log(newRestaurant);
      this.myService.addRestaurant(newRestaurant).subscribe();
      //   this.router.navigate(['/']); 
      alert(`Rest ${Rname} added successfully`)
    }
}
