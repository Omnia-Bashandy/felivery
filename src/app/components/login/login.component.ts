import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 // const phoneNumberPattern = /^(\+\d{1,3}[- ]?)?\d{10}$/;
 validlogin= new FormGroup({
  username: new FormControl("",[Validators.min(8),Validators.max(12),Validators.required]),
  email:new FormControl("",[Validators.email,Validators.required]),
  password:new FormControl("",[Validators.min(8),Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),Validators.required]),

})

loginuser(){
  if(this.validlogin.valid){
  console.log(this.validlogin.value)
  }
}
}
