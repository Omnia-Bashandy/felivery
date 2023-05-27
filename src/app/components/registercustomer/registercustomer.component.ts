import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {faEye , faEyeSlash  } from '@fortawesome/free-solid-svg-icons';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-registercustomer',
  templateUrl: './registercustomer.component.html',
  styleUrls: ['./registercustomer.component.css']
})
export class RegistercustomerComponent {
  eye = faEye;
  eyeSlash = faEyeSlash
  passwordVisible: boolean = false;
  constructor(private http : CustomerService){}
  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
  
  validRegCustomer= new FormGroup({
    username: new FormControl("",[Validators.min(8),Validators.max(12),Validators.required]),
    email:new FormControl("",[Validators.email,Validators.required]),
    password:new FormControl("",[Validators.min(8),Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),Validators.required]),
    mobile:new FormControl("",[Validators.required,Validators.pattern(/^(\+01-?)?(\d{10})$/)]), 
    address: new FormControl("",[Validators.max(12),Validators.required]),
  })
  AdduserCustomer(username: string, email: string, password: string, mobile: string, address: string) {
    
// {
//   "model": {
//     "username": "Ober",
//     "email": "Ober@Ober.com",
//     "password": "Ober@123"
//   },
//   "customer": {
//     "customerName": "Ober",
//     "address": "string",
//     "mobileNumber": 44166666
//   }
// }
    const userData = {
      "model":{
        username: username,
        email: email,
        password: password
      },
      "customer": {
            customerName: username,
            address: address,
            mobileNumber: mobile
          }
      // mobileN
    };

    this.http.Register(userData).subscribe(
      (response) => {
        // Handle the successful response here
        console.log(response);
      },
      (error) => {
        // Handle the error here
        console.error(error);
      }
    );
  }
  }

