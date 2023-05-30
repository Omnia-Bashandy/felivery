import { Component } from '@angular/core';
import { faMagnifyingGlass , faBars } from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/Services/cart.service';

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

cartItemCount: number|any = 0;
constructor(public cartService: CartService) {}

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

}
