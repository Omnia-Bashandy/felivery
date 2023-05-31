import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-orderstatus',
  templateUrl: './orderstatus.component.html',
  styleUrls: ['./orderstatus.component.css']
})
export class OrderstatusComponent implements OnInit{
  done: boolean = false;
  pending: boolean = false;
  cancel: boolean = false;

  constructor(private sharedserv: SharedService) {}

  ngOnInit() {
    const status = this.sharedserv.getStatus();

    if (status == 'pending') {
      this.pending = true;
      this.done = false
      this.cancel = false
    } else if (status == 'done') {
      this.pending = false;
      this.done = true
      this.cancel = false
    } else if (status == 'cancel') {
      this.pending = false;
      this.done = false
      this.cancel = true
    }
  }
}
