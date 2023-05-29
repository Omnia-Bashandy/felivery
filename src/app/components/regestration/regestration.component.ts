import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/Services/store.service';
import {faEye , faEyeSlash  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-regestration',
  templateUrl: './regestration.component.html',
  styleUrls: ['./regestration.component.css']
})
export class RegestrationComponent {

  selectedFile: File | null = null;

  ondileSelected(event:any){
    this.selectedFile = event.target.files[0];
  }
  onUpload(){
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('image', this.selectedFile);
  
      // Replace 'your-upload-url' with the actual URL for uploading the image
      // const uploadUrl = 'your-upload-url';
  
      this.myService.addRestaurant(formData).subscribe(
        response => {
          console.log('Image uploaded successfully');
          console.log(response);
          
        },
        error => {
          console.error('Image upload failed', error);
          // Handle any errors
        }
      );
    } else {
      console.error('No file selected');
    }
  }

  eye = faEye;
  eyeSlash = faEyeSlash
  passwordVisible: boolean = false;
  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
  
  // reactive forms
  // const phoneNumberPattern = /^(\+\d{1,3}[- ]?)?\d{10}$/;
  validationsRegister = new FormGroup({
    username: new FormControl("",[Validators.min(8),Validators.max(12),Validators.required]),
    address: new FormControl("",[Validators.max(12),Validators.required]),
    email:new FormControl("",[Validators.email,Validators.required]),
    password:new FormControl("",[Validators.min(8),Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),Validators.required]),
    mobile:new FormControl("",[Validators.required,Validators.pattern(/^(\+01-?)?(\d{10})$/)]),
    desc:new FormControl("",[Validators.required,Validators.min(10)]),
    imgupload:new FormControl(""),
  })
  constructor(public myService:StoreService , private router: Router){

    // console.log(myService.getAllRestaurants.length);
  }

  
  AddRestaurant(discription: string, phone: number, address: string, password: string, remail: string, Rname: string) {
    console.log(phone);
    
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
  if (this.validationsRegister.valid) {
    
    console.log(newRestaurant);
      this.myService.addRestaurant(newRestaurant).subscribe({
        next: (data: any) => {
          console.log(data);
          const token = data["token"]; // Accessing the "id" property
          console.log(token); // Check the value of id
          localStorage.setItem('token',token)
          this.router.navigate(['/pending']); 
          
          alert(`Rest ${Rname} added successfully`)
        },
        error: (err) => {
          console.log(err);
          // Handle login error
        },
    })
  }
}}