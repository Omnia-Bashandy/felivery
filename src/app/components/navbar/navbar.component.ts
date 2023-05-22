import { Component } from '@angular/core';
import { faMagnifyingGlass , faBars } from '@fortawesome/free-solid-svg-icons';

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
toggleDropdown(): void {
  this.showDropdown = !this.showDropdown;
}
setActive(link: string): void {
  this.activeLink = link;
}

}
