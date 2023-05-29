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
  oorder:any;
  // id:any
  constructor(public route: ActivatedRoute,private menuService: MenuitemsService
     , private shared:SharedService , public router:Router) {
    
  }
  custId : any = this.shared.getCustId()

  itemId:any;

      // fetch item by id -> route to order page -done
      // fetch resturant id -> shared 
      ngOnInit() {
      this.menuService.GetAllmenuserved().subscribe((data)=>this.items=data);

      this.itemId = this.route.params.subscribe(params => {
        const itemid = params['id'];
        this.menuService.getMenuitemById(itemid).subscribe(
          (data)=>
          this.Item=data
          );
      });
    }

      //quantity 
 quantity: number = 1; 
  incrementQuantity() {
    this.quantity++;
  }
  decrementQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
order:any;
allorder:any=[];
  addToCart() {
    if (this.itemId && this.Item) {
      this.order = {
        menuItemID: {
          id: this.itemId.id,
          name: this.Item.name,
          price: this.Item.price,
          menuItemImg: this.Item.menuItemImg,
          categoryID: this.Item.categoryID,
          restaurantID: this.Item.restaurantID
        },
        quantity: this.quantity
      };
  
       this.allorder.push(this.order);
      localStorage.setItem('order', JSON.stringify(this.order));
      console.log(localStorage.getItem('order'));
      alert(`${this.order.menuItemID.name},"Added Succefully"`)
        this.router.navigate(['/cart']);
  
      // if (this.custId) {
      //   this.router.navigate(['/cart']);
      // } else {
      //   this.router.navigate(['/login']);
      // }
    }
  }

  }
    

