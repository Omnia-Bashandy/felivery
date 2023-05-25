import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  Adduser(){
    if (this.validationsRegister.valid) {
    console.log(this.validationsRegister.value);
    }
  }

}
