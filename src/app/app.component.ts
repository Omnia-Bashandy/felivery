import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title="hi"
  isLoading = true;

  ngOnInit() {
    // Simulate loading delay
    setTimeout(() => {
      this.isLoading = false;
    }, 3000); // Adjust the delay time as needed
  }
}
