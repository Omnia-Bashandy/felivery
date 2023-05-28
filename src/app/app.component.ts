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
    }, 3000); // Adjust the delay time as needed

    // // Retrieve token from local storage
    // const token = this.loginService.getToken();

    // if (token) {
    //   // Set the token in the cookie
    //   this.loginService.setToken(token);
    // }
  }

  isDashboardRoute(): boolean {
    return this.router.url.startsWith('/store-dashboard');
  }
}


//   const body = { title: 'Angular PUT Request Example' };
//   this.http.put<any>('https://jsonplaceholder.typicode.com/posts/1', body)
//       .subscribe(data => this.title = data.id);
// }