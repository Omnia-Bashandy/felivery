import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuitemsService } from 'src/app/Services/menuitems.service';
import { MenuservedComponent } from '../menuserved/menuserved.component';
import { data, param } from 'jquery';
import { SharedService } from 'src/app/Services/shared.service';
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
  items:any = [];
  id:any
  constructor(public route: ActivatedRoute,private menuService: MenuitemsService , private shared:SharedService , public router:Router) {
    
  }
  custId : any = this.shared.getCustId()

    ngOnInit() {
      // console.log(this.route.params.subscribe(params=> this.getelmentbyid(params['id'])));
      // this.route.params.subscribe(params => {
      //   this.id = params['id'];
      // })
      // this.route.params.subscribe(params=> this.getelmentbyid(params['id']));
      // console.log(this.id);
      this.menuService.GetAllmenuserved().subscribe((data)=>this.items=data);
    }
    getelmentbyid(id:any){
      this.menuService.getMenuitemById(id).subscribe(
        (response) => {
      console.log(response);
      
      }, (error) => {
        console.log(error);
      });
      }
      
    quantity: number = 1; // Initial quantity
  incrementQuantity() {
    this.quantity++;
  }

  decrementQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
  addToCart(){
  if (this.custId) {
    this.router.navigate(['/cart'])
  }else{
    this.router.navigate(['/login'])
  }
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
    

