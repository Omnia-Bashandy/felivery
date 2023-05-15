import { Component } from '@angular/core';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent {
  motorcycle = faMotorcycle;
}
