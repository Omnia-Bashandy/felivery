
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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

  rateInput = new FormControl(0);
  ratingValue:any;
  totalRatings:any;
  numOfRaters:any;
  getRating(){
    console.log(this.rateInput.value);
  }
  // rate() {
  //   const rate = this.rateInput.value;
  //   this.storeService.rateStore(this.storeid, rate).subscribe(
  //     (response: any) => {
  //       console.log(response);
  //       this.totalRatings = response.totalRatings;
  //       this.numOfRaters = response.numOfRaters;
  //       console.log(this.totalRatings);
  //       alert(`rating saved successfully with total ratings: ${this.totalRatings} and number of raters: ${this.numOfRaters}`);
  //       this.ratingSubmitted = true;
  //     },
  //     error => {
  //       console.error(error);
  //     }
  //   );
  
  
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
    cartshowing = false;
    
    showcart() {
    this.cartshowing = true;
    }

  close() {
    this.cartshowing = false;
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

  addToCart(MID:any) {
    // this.route.params.subscribe(params => {
    //   const itemId = params['id'];
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
          // this.router.navigate(['/cart']);
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
          // setInterval(this.refresh,50)
          alert(`${this.order.menuItemID.name} added successfully.`);
          this.showcart();
          // this.router.navigate(['/cart']);
        }
      }
    }

  refresh(): void {
      window.location.reload();
  }
}
