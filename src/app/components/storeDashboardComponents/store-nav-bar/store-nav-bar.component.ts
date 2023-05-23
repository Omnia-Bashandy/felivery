import { Component } from '@angular/core';
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

  ngOnInit(): void {
    this.isActive('storehome'); // Evaluate the active state of the 'storehome' link when the component initializes
  }
  
  isActive(link: string): boolean {
    return this.activeLink === link;
  }

  setActive(link: string): void {
    this.activeLink = link;
  }
}
