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

isActive(link: string): boolean {
  return this.activeLink === link;
}

setActive(link: string): void {
  this.activeLink = link;
}

}
