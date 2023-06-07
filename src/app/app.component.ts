import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../loading.service';
import { Router } from '@angular/router';
import { LoginService } from './Services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = "hi";
  isLoading = true;

  constructor(
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    // Simulate loading delay
    setTimeout(() => {
      this.isLoading = false;
    }, 1000); // Adjust the delay time 

  }

  isDashboardRoute(): boolean {
    return this.router.url.startsWith('/store-dashboard');
  }
}
