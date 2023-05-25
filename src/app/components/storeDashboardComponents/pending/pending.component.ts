import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {faHourglassEnd} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent {
pending = faHourglassEnd
constructor( private router: Router){}

back(){
  this.router.navigate(['/']); 
}
}
