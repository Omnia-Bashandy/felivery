import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuitemsService } from 'src/app/Services/menuitems.service';
import { MenuservedComponent } from '../menuserved/menuserved.component';
import { data, param } from 'jquery';
import { SharedService } from 'src/app/Services/shared.service';
import { CartService } from 'src/app/Services/cart.service';
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
  // oorder:any;
  custId : any = this.shared.getCustId();
  itemId:any;
  quantity: number = 1; 
  order:any;
  allorder:any=[];

  constructor(public route: ActivatedRoute,
    private menuService: MenuitemsService
    , private shared:SharedService , 
    public router:Router , public cartService:CartService) {}

  ngOnInit() {
      this.menuService.GetAllmenuserved().subscribe((data)=>this.items=data);
      this.itemId = this.route.params.subscribe(params => {
        const itemid = params['id'];
        this.menuService.getMenuitemById(itemid).subscribe(
          (data)=>{
          this.Item=data
          console.log("this item order id",this.Item);
          console.log(data);
          console.log(this.Item["id"]);
          }
          );
      });
}
//quantity 
  incrementQuantity() {
    this.quantity++;
  }
  decrementQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
}

// restrictions : 1- customer can not add from diffrent restuarants 
// 2- if he want to change quantity he must increase it
//  before go to cart or there can increse it
// 3- if item already added and he tries to add it again alert with Its already in cart

addToCart() {
  if (this.itemId && this.Item) {
    const restaurantID = this.Item.restaurantID;
    const cartRestaurantID = this.shared.getcartRestId();

    // لو الid بتاع الايتيم بيساوي الكارت وقتها يضيف عادي لو لا لازم 
    if (this.Item.restaurantID !== cartRestaurantID) {
      if (cartRestaurantID) {
        alert('You can only add items from the same restaurant to your cart. you must empty Your Cart first');
        return;
      } else {
        this.shared.setcartRestId(restaurantID);
      }
    }

    const existingItemIndex = this.cartService.getCartItems().findIndex((item: any) => item.menuItemID.id === this.Item.id);

    if (existingItemIndex !== -1) {
      alert('Item is already in the cart.');
      this.router.navigate(['/cart']);
    } else {
      this.order = {
        menuItemID: {
          id: this.Item.id,
          name: this.Item.name,
          price: this.Item.price,
          menuItemImg: this.Item.menuItemImg,
          categoryID: this.Item.categoryID,
          restaurantID: restaurantID
        },
        quantity: this.quantity
        // add payment data 
      };
      this.cartService.addToCart(this.order);
      alert(`${this.order.menuItemID.name} added successfully.`);
      this.router.navigate(['/cart']);
    }
}
}

}