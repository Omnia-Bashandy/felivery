import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-store',
  templateUrl: './edit-store.component.html',
  styleUrls: ['./edit-store.component.css']
})
export class EditStoreComponent {
  activeLink: string = 'home';
  
  isActive(link: string): boolean {
    return this.activeLink === link;
  }
  
  setActive(link: string): void {
    this.activeLink = link;
  }
}
