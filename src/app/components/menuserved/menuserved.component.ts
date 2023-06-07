import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuitemsService } from 'src/app/Services/menuitems.service';

@Component({
  selector: "app-menuserved",
  templateUrl: "./menuserved.component.html",
  styleUrls: ["./menuserved.component.css"],
})
export class MenuservedComponent implements OnInit {
  p: number = 1;
  itemperpage: number = 12;
  items: any = [];

  constructor(public menuservice: MenuitemsService, private router: Router) {}
  ngOnInit(): void {
    this.menuservice.GetAllmenuserved().subscribe({
      next: (data) => {
        (this.items = data), console.log(this.items);
        for (let index = 0; index < this.items.length; index++) {
          const element = this.items[index];
          if (this.items[index].isOffer === true) {
            console.log(this.items[index].isOffer);
          }
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
