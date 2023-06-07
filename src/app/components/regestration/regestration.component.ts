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

  selectedFile: FormData | undefined ;

  onUpload(event: any){
    if(event.target.files.length > 0) {
      const file = event.target.files[0];
      //if(event.target.files.length == 1 && (file.type == 'image/png' || file.type == 'image/jpeg' || file.type == 'image/jpg')) {
      if(file.type == 'image/png' || file.type == 'image/jpeg' || file.type == 'image/jpg') {
        const formData = new FormData();
        formData.append('file',file);
        //this.selectedFile = file;
        this.selectedFile = formData;
      } else {
        alert('Please select an Image in either .jpg, .jpeg, or .png forms!');
      }
    }
  }

  eye = faEye;
  eyeSlash = faEyeSlash
  passwordVisible: boolean = false;
  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
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
  }
  refresh(): void {
    window.location.reload();
  }
imgUrl:any;
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
      // storeImg : this.imgUrl
      }
  }
  
  if (this.validationsRegister.valid) {
    //register
    console.log(newRestaurant);
      this.myService.addRestaurant(newRestaurant).subscribe({
        
        next: (data: any) => {
          console.log(data);
          const token = data["token"]; // Accessing the "id" property
          console.log(token); // Check the value of id
          localStorage.setItem('token',token)
          this.router.navigate(['/pending']); 
          console.log("hello")
          alert(`Restaurant ${Rname} added successfully`)

           //image
      this.myService.uploadImg(this.selectedFile, Rname ).subscribe({ 
          next(data : any) {
            console.log(data);
          },error: (err) => {
            console.log(err);
            this.imgUrl = err.error["text"]
            console.log(err.error["text"]);
            
          }
        })
        setInterval(this.refresh,50)
        },
        error: (err) => {
          console.log(err);
          console.log(err.error);
          alert(`${err.error}`)
        }
        
      })
  }
    
        
}}