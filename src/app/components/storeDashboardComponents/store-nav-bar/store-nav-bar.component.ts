import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faMagnifyingGlass , faBars } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-store-nav-bar',
  templateUrl: './store-nav-bar.component.html',
  styleUrls: ['./store-nav-bar.component.css']
})
export class StoreNavBarComponent {
  search = faMagnifyingGlass;
  bars = faBars
  activeLink: string = 'storehome';
constructor(public route:Router){}
  ngOnInit(): void {
    this.isActive('storehome'); // Evaluate the active state of the 'storehome' link when the component initializes
  }
  
  isActive(link: string): boolean {
    return this.activeLink === link;
  }

  setActive(link: string): void {
    this.activeLink = link;
  }
  logOut(){
    // localStorage.removeItem("token")
    this.route.navigate(['/login'])
    console.log("hii");
    
  }
}
