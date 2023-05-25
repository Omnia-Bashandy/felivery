import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registercustomer',
  templateUrl: './registercustomer.component.html',
  styleUrls: ['./registercustomer.component.css']
})
export class RegistercustomerComponent {
  // const phoneNumberPattern = /^(\+\d{1,3}[- ]?)?\d{10}$/;
  validRegCustomer= new FormGroup({
    username: new FormControl("",[Validators.min(8),Validators.max(12),Validators.required]),
    email:new FormControl("",[Validators.email,Validators.required]),
    password:new FormControl("",[Validators.min(8),Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),Validators.required]),
    mobile:new FormControl("",[Validators.required,Validators.pattern(/^(\+01-?)?(\d{11})$/)]), 
    address: new FormControl("",[Validators.max(12),Validators.required]),
  })
  AdduserCustomer(){
    if(this.validRegCustomer.valid){
    console.log(this.validRegCustomer.value)
    }
  }
}
