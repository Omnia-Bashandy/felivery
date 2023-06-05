import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {faEye , faEyeSlash  } from '@fortawesome/free-solid-svg-icons';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-registercustomer',
  templateUrl: './registercustomer.component.html',
  styleUrls: ['./registercustomer.component.css']
})
export class RegistercustomerComponent {
  refresh(): void {
    window.location.reload();
  }
  eye = faEye;
  eyeSlash = faEyeSlash
  passwordVisible: boolean = false;
  constructor(private http : CustomerService , private route:Router){}
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
    console.log(userData);
    
    // setInterval(this.refresh,5000)
    this.http.Register(userData).subscribe({
      next: (data: any) => {
        console.log(data);
        const token = data["token"]; // Accessing the "id" property
        console.log(token); // Check the value of id
        localStorage.setItem('token',token)
        alert(`Welcome in Felivery`);
        this.route.navigate(['/login'])
      },
      
      error: (err) => {
        console.log(err);
        alert(`${err.error}`)
        // Handle login error
      },
      });
    }
  // },token
  }

