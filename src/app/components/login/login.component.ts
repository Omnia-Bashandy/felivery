import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/Services/login.service';
import {faEye , faEyeSlash  } from '@fortawesome/free-solid-svg-icons';
import { SharedService } from 'src/app/Services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  eye = faEye;
  eyeSlash = faEyeSlash
  passwordVisible: boolean = false;
  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
 // const phoneNumberPattern = /^(\+\d{1,3}[- ]?)?\d{10}$/;
 validlogin= new FormGroup({
  username: new FormControl("",[Validators.min(8),Validators.max(12),Validators.required]),
  email:new FormControl("",[Validators.email,Validators.required]),
  password:new FormControl("",[Validators.min(8),Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),Validators.required]),

})
constructor(public myService:LoginService ,public sharedService :SharedService , public router : Router){
    // this.myService.listen().subscribe((m:any)=>{
    //   console.log(m); 
    // })
};
refresh(): void {
  window.location.reload();
}


ngOnInit(): void {
}
login(email: any, password: any) {
  console.log("hiii");

  // if (this.validlogin.valid) {
    const credentials = {
      email: email,
      password: password
      
    };
    
    //  this.myService.filter('Register click')
  
  //  var x = window.location.reload();
    this.myService.login(credentials).subscribe({
      next: (data: any) => {
        console.log(data);
        const id = data["id"]; // Accessing the "id" property
        const role = data["roles"][0]; // Accessing the "role" property        
        const logToken = data["token"]; // Accessing the "token" property
        const name = data["username"]; // Accessing the "username" property
        localStorage.setItem("token",logToken)
     
        if (role == "PendingStore") {
          this.router.navigate(['/pending']); 
        }else if(role == "Customer"){
          localStorage.setItem("CustName",name)
          this.router.navigate(['/']); 
          this.sharedService.setCustId(id)
        }else if(role == "ApprovedStore"){
          this.router.navigate(['/store-dashboard/storehome'])
          this.sharedService.setId(id);
        }
        setInterval(this.refresh,50)
      //  this.refresh()
      },
      error: (err) => {
        console.log(err);
        alert(`${err.error}`)
        // Handle login error
      },
    });


    // console.log(this.validlogin.value);
  
  }
  
}

