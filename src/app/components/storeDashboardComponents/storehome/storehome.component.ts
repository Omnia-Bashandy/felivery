import { Component } from '@angular/core';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-storehome',
  templateUrl: './storehome.component.html',
  styleUrls: ['./storehome.component.css']
})
export class StorehomeComponent {
  id!: string | null;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    // Get the stored id from the shared service
    this.id = this.sharedService.getId();
    console.log(this.id);
    
  }
}
