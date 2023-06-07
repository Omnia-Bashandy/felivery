import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/Services/shared.service';
import { StoreService } from 'src/app/Services/store.service';

@Component({
  selector: 'app-edit-stor-img',
  templateUrl: './edit-stor-img.component.html',
  styleUrls: ['./edit-stor-img.component.css']
})
export class EditStorImgComponent {
  restaurantData: any;
  Rname: any;
  id!: string | null;

  selectedFile: FormData | undefined ;

  onUpload(event: any ){
    if(event.target.files.length > 0) {
      const file = event.target.files[0];
            if(file.type == 'image/png' || file.type == 'image/jpeg' || file.type == 'image/jpg') {
        const formData = new FormData();
        formData.append('file',file);
        
        this.selectedFile = formData;
      } else {
        alert('Please select an Image in either .jpg, .jpeg, or .png forms!');
      }
    }
    
  }
  constructor(private sharedService: SharedService, public myService: StoreService,private route:Router) {}

  ngOnInit() {
    this.id = this.sharedService.getId();

    // Get the stored id from the shared service
    console.log(this.id);
    this.myService.getRestaurantById(this.id).subscribe({
      next: (data) => {
        this.restaurantData = data;
        console.log(data);
        console.log(this.id);
        console.log(this.restaurantData.name);
        this.Rname = this.restaurantData.name;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  update() {
    console.log("hihi");
    console.log(this.selectedFile);
    console.log(this.Rname);
    
    this.myService.uploadImg(this.selectedFile, this.Rname ).subscribe({ 
      next(data : any) {
        console.log(data);
      },error: (err) => {
        console.log(err);
          console.log(err.error["text"]);
          this.route.navigate(['/store-dashboard/edit-store'])
        }
      })
        
    }
}
