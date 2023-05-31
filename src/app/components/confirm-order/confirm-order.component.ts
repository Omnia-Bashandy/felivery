import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.css']
})
export class ConfirmOrderComponent implements OnInit{

  validStatus:any;

  constructor(private sharedserv:SharedService) {
  }
  ngOnInit(){
    this.validStatus = this.sharedserv.getStatus();
    
  }

}
