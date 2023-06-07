import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faMagnifyingGlass , faBars } from '@fortawesome/free-solid-svg-icons';
import { data } from 'jquery';
import { SharedService } from 'src/app/Services/shared.service';
import { StoreService } from 'src/app/Services/store.service';


@Component({
  selector: 'app-store-nav-bar',
  templateUrl: './store-nav-bar.component.html',
  styleUrls: ['./store-nav-bar.component.css']
})
export class StoreNavBarComponent {
  id: any = this.shared.getId()
  StoreImg:any;
  TheStore: any
  search = faMagnifyingGlass;
  bars = faBars
  activeLink: string = 'storehome';
  resId: any;
constructor(public route:Router, private shared:SharedService, private store:StoreService){}
  ngOnInit(): void {
    this.store.getRestaurantById(this.id).subscribe(
      (data) => {
        console.log(data);
        this.TheStore = data;
        this.StoreImg = this.TheStore.storeImg;
      },
      (error) => {
        console.log("error mfesh soraaa",error);
      }
    );

    this.isActive('storehome'); // Evaluate the active state of the 'storehome' link when the component initializes
  console.log("aaaaaaaaaaaaaaaaaaaaaaaaa");
  // console.log(this.id);
  // console.log(this.resId);
  // console.log(this.resId.name);
  }
  
  isActive(link: string): boolean {
    return this.activeLink === link;
  }

  setActive(link: string): void {
    this.activeLink = link;
  }
  refresh(): void {
    window.location.reload();
  }
  LogOut(){
    this.route.navigate(['/login'])
    setInterval(this.refresh,50)
  }
}
