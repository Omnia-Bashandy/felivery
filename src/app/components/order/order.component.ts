import { Component } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {


    isHidden: boolean = true;

    toggleVisibility() {
      this.isHidden = !this.isHidden;
    
  }
}
