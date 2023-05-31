import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuitemsService } from 'src/app/Services/menuitems.service';
import { MenuservedComponent } from '../menuserved/menuserved.component';
import { data, param } from 'jquery';
import { SharedService } from 'src/app/Services/shared.service';
import { CartService } from 'src/app/Services/cart.service';
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
  constructor(public route: ActivatedRoute,
    private menuService: MenuitemsService
    , private shared:SharedService , public router:Router , public cartService:CartService) {
    
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
          (data)=>{
          this.Item=data
          console.log("this . item order id",this.Item);
          
          console.log(data);
          console.log(this.Item["id"]);
          }
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
      const restaurantID = this.Item.restaurantID;
      const cartRestaurantID = this.shared.getcartRestId();
      console.log(restaurantID);
      console.log(cartRestaurantID);
      // if (cartRestaurantID === null) {
        this.shared.setcartRestId(restaurantID);
      // }
      // else if (cartRestaurantID && restaurantID == cartRestaurantID) {
        const existingItemIndex = this.cartService.getCartItems().findIndex((item: any) => item.menuItemID.id === this.Item.id);
        if (existingItemIndex !== -1) {
          this.cartService.getCartItems()[existingItemIndex].quantity += this.quantity;
          this.cartService.updateCartItems(this.cartService.getCartItems());
        }
         else {
          // Item does not exist in the cart, add it as a new item
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
          };
          this.cartService.addToCart(this.order);
        }
        alert(`${this.order.menuItemID.name} added successfully.`);
        this.router.navigate(['/cart']);
      } 
      // else {
      //   alert('You can only add items from the same restaurant to your cart.');
      // }
    }
  }
  
  
  


  

