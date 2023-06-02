import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/Services/shared.service';
import { StoreService } from 'src/app/Services/store.service';

@Component({
  selector: 'app-edit-store',
  templateUrl: './edit-store.component.html',
  styleUrls: ['./edit-store.component.css']
})
export class EditStoreComponent implements OnInit {
  activeLink: string = 'home';


  isActive(link: string): boolean {
    return this.activeLink === link;
  }

  setActive(link: string): void {
    this.activeLink = link;
  }

  validUpdatestore = new FormGroup({
    username: new FormControl("", [Validators.min(8), Validators.max(12), Validators.required]),
    address: new FormControl("", [Validators.max(12), Validators.required]),
    email: new FormControl("", [Validators.email, Validators.required]),
    password: new FormControl("", [
      Validators.min(8),
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
      Validators.required
    ]),
    mobile: new FormControl("", [Validators.required, Validators.pattern(/^(\+01-?)?(\d{11})$/)]),
    desc: new FormControl("", [Validators.required, Validators.min(10)]),
    imgupload: new FormControl(""),
  });

  restaurantData: any;
  id!: string | null;

  constructor(private sharedService: SharedService, public myService: StoreService) {}

  ngOnInit() {
    this.id = this.sharedService.getId();

    // Get the stored id from the shared service
    console.log(this.id);
    this.myService.getRestaurantById(this.id).subscribe({
      next: (data) => {
        this.restaurantData = data;
        console.log(data);
        console.log(this.restaurantData);
        console.log(this.restaurantData.address);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  update( Rmobile: any, Rname: any, Raddress: any, Rdis: any) {
    // if (this.validUpdatestore.valid) {
      // {
      //   "id": 5,
      //   "name": "Kareem",
      //   "address": "New string",
      //   "mobileNumber": 7775555,
      //   "description": "New string",
      //   "storeImg": "string",
      //   "type": 0
      // }
      const updatedData = {
        id:this.id,
        name: Rname.value,
        address: Raddress.value,
        mobileNumber: Rmobile.value,
        description: Rdis.value,
        type: 0
      };
      console.log(updatedData);
      
      this.myService.updateRestaurant (updatedData).subscribe({
        next: (response) => {
          // Handle the response
          console.log(response);
          console.log(this.id);
          
    //       //image
    // this.myService.uploadImg(this.selectedFile, Rname ).subscribe({ 
    //   //this.myService.uploadImg( Rname ).subscribe({ 
    //     next(data : any) {
    //       console.log(data);
    //     },error: (err) => {
    //       console.log(err);
    //       // this.imgUrl = err.error["text"]
    //       console.log(err.error["text"]);
          
    //     }
    //   })
        },
        error: (err) => {
          console.error(err);
        }
      });
    }
  }
// }
