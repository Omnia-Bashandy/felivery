import { Component, ViewChild } from '@angular/core';
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
status: any;

cartItemCount: number|any = 0;
constructor(public cartService: CartService,private login:LoginService,
  private user:SharedService ) {
    this.status = this.user.getStatus();
  }
  
  CustName :string | null | undefined;
  ngOnInit() {
    // Fetch the cart item count from the cart service or data source
    this.cartItemCount = this.cartService.getCartItemsCount();
    this.CustName = localStorage.getItem("CustName");
  }
  isloggedIn(): boolean {
    return !!this.CustName; // Returns true if customer name  exists, false otherwise
  }
  refresh(): void {
    window.location.reload();
  }
  logOut(){
    localStorage.removeItem("token")
    localStorage.removeItem("CustName")
    setInterval(this.refresh,50)
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

}
