import { Component } from '@angular/core';
import { faMagnifyingGlass , faBars } from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/Services/cart.service';
import { LoginService } from 'src/app/Services/login.service';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
search = faMagnifyingGlass;
bars = faBars
activeLink: string = 'home';
showDashboardLinks = false;
showDropdown: boolean = false; // Add showDropdown property
islog:boolean = true;


status: string = '';

cartItemCount: number|any = 0;
constructor(public cartService: CartService,private login:LoginService,
  private user:SharedService ) {
    this.status = this.user.getStatus();
  }

  name = localStorage.getItem("CutName")


  ngOnInit() {
    // Fetch the cart item count from the cart service or data source
    this.cartItemCount = this.cartService.getCartItemsCount();
  }

Activet(link: string) {
    if (link === 'store-dashboard') {
      this.showDashboardLinks = true;
    } else {
      this.showDashboardLinks = false;
    }
  }
isActive(link: string): boolean {
  return this.activeLink === link;
}
setActive(link: string): void {
  this.activeLink = link;
}
toggleDropdown(): void {
  this.showDropdown = !this.showDropdown;
}
isLoggedIn: boolean = false;

isloggedIn(): boolean {
  const token = localStorage.getItem('CutName');
  return !!token; // Returns true if token exists, false otherwise
}

logOut(){
  localStorage.removeItem("token")
  localStorage.removeItem("CutName")
}
}
