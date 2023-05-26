import { Component } from '@angular/core';
import { SharedService } from 'src/app/Services/shared.service';
import { StoreService } from 'src/app/Services/store.service';

@Component({
  selector: 'app-delete-store',
  templateUrl: './delete-store.component.html',
  styleUrls: ['./delete-store.component.css']
})
export class DeleteStoreComponent {
  id: string | null = this.sharedService.getId();
  Rname : string | null = this.sharedService.geName();
  constructor(private sharedService: SharedService , public myService:StoreService ) {}
  
  deleteR(){
    this.myService.deleteRestaurant(this.id).subscribe();
  }
}
