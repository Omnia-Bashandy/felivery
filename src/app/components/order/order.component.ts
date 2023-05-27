import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuitemsService } from 'src/app/Services/menuitems.service';
import { MenuservedComponent } from '../menuserved/menuserved.component';
import { data, param } from 'jquery';
// import { error } from 'jquery';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent  implements OnInit{
  
  isHidden: boolean = true;
  toggleVisibility() {
    this.isHidden = !this.isHidden;
  }

  Item:any|undefined;
  constructor(public route: ActivatedRoute,private menuService: MenuitemsService) {
      
    }

    ngOnInit() {
      console.log(this.route.params.subscribe(params=> this.getelmentbyid(params['id'])));
      
      this.route.params.subscribe(params=> this.getelmentbyid(params['id']));
    }
    getelmentbyid(id:any){
      this.menuService.getMenuitemById(id).subscribe((data)=>this.Item = data)

    }

    // itemId:any;
    // Item:any;
    // constructor(route: ActivatedRoute,private menuService: MenuitemsService) {
    //   this.itemId = route.snapshot.params["id"];
    // }

    // ngOnInit() {
    //   this.menuService.getMenuitemById(this.itemId).subscribe({
    //     next:(data)=>{
    //       console.log(data);
    //     this.Item = data;
    //     },
    //     error:(err)=>{
    //       console.log(err);
    //     }
    //   })
    // };

  }
    

