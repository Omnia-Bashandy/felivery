import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-orderstatus',
  templateUrl: './orderstatus.component.html',
  styleUrls: ['./orderstatus.component.css']
})
export class OrderstatusComponent implements OnInit{
  validStatus:any;

  constructor(private sharedserv:SharedService) {
  }
  ngOnInit(){
    this.validStatus = this.sharedserv.getStatus();
    
  }
}
