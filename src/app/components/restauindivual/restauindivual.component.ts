
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuitemsService } from 'src/app/Services/menuitems.service';
import { SharedService } from 'src/app/Services/shared.service';
import { StoreService } from 'src/app/Services/store.service';

// cart service
import { CartService } from 'src/app/Services/cart.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-restauindivual',
  templateUrl: './restauindivual.component.html',
  styleUrls: ['./restauindivual.component.css']
})
export class RestauindivualComponent implements OnInit {
  storeID: any;
  restaurant: any;
  menus: any[] = [];

  // order 
  Item: any | undefined;
  items: any = [];
  custId: any = this.shared.getCustId();
  itemId: any;
  quantity: number = 1;
  order: any;
  savedItems: any[] = [];

  @ViewChild('paymentRef', {static: true}) paymentRef!: ElementRef;
  backupOrderobject:any; //object that sends into store home if customer press cancel button in pending page

  // cart

  constructor(
    private storeService: StoreService,
    private menuitemsService: MenuitemsService,
    private route: ActivatedRoute,
    private router: Router,
    private shared: SharedService,
    public cartService: CartService
  ) {}

  storeid:any = this.shared.getId();

  
  
  selectedRating: any;
  // totalRatings: number;
  total: any;
  // numOfRaters: number;
onRateChange(rating: number) {
  this.selectedRating = rating;
}

  
ratingSubmitted:any
orders:any
  ngOnInit(): void {


    this.route.params.subscribe(params => {
      this.storeID = params['id'];
  
      // Fetch restaurant by ID
      this.storeService.getRestaurantById(this.storeID).subscribe(
        (data) => {
          this.restaurant = data;
        },
        (error) => {
          console.log('Error fetching restaurant:', error);
        }
      );
    });

    // Get items by restID
    this.storeService.getItemsbyRestID(this.storeID).subscribe(
      (data: any) => {
        console.log(data); // All items
        this.menus = data;
      },
      (error: any) => {
        console.log("There is an error", error); 
      }
    );

    this.orders = this.cartService.getCartItems();
    for (let i = 0; i < this.orders.length; i++) {
      const item = {
        menuItemID: this.orders[i]["menuItemID"]["id"],
        quantity: this.orders[i]["quantity"],
        price: this.orders[i]["menuItemID"]["price"]
        
      };
      console.log(this.orders[i]);  
      this.savedItems.push(item);
      window.paypal.Buttons(
        {
          style: {
            layout: 'horizontal',
            color: 'blue',
            shape: 'rect',
            label: 'paypal',
          },
        }).render(this.paymentRef.nativeElement);
      }
      
      this.savedItems = this.cartService.getCartItems();
    }
    
    // Floating cart
    cartshowing = true;
    
  showcart() {
    if (this.cartshowing) {
      this.cartshowing = false;
    }
    else{
      this.cartshowing = true;
    }
  }


  // Quantity 
  incrementQuantity() {
    this.quantity++;
  }

  decrementQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  initial_value:any = null;
  Clear(){
    this.cartService.clearCart();
    localStorage.setItem("RestCartId", this.initial_value);
      window.location.reload();
  }

  addToCart(MID:any) {
      console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",MID);
      console.log(MID);
      
      this.menuitemsService.getMenuitemById(MID).subscribe(
        (data) => {
          this.Item = data;
          console.log("Item ID:", data);

          const itemID = this.Item["id"];
          console.log("Item ID:", itemID);
        })
      
    
      if (MID) {
        const restaurantID = this.Item.restaurantID;
        const cartRestaurantID = this.shared.getcartRestId();
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
          this.showcart();
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
          };
          this.cartService.addToCart(this.order);
          alert(`${this.order.menuItemID.name} added successfully.`);
          setInterval(this.refresh,50)
        }
      }
    }

  refresh(): void {
      window.location.reload();
  }
  isAtTop = true;
    @HostListener('window:scroll')
    onWindowScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      if (scrollTop === 0) {
        this.isAtTop = true;
      } else {
        // Otherwise, set isAtTop to false
        this.isAtTop = false;
      }
    }
}
