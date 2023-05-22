import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../loading.service';
// import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title="hi"
  isLoading = true;
  // constructor(private http: HttpClient) {}
  isOk = true;

  ngOnInit() {
    // Simulate loading delay
    setTimeout(() => {
      this.isLoading = false;
    }, 3000); // Adjust the delay time as needed
  }

  
//   const body = { title: 'Angular PUT Request Example' };
//   this.http.put<any>('https://jsonplaceholder.typicode.com/posts/1', body)
//       .subscribe(data => this.title = data.id);
// }
  public notOk() {
    this.isOk = false;
    return  this.isOk;
  }
  public Ok() {
    this.isOk = true;
    return  this.isOk;
  }
}
