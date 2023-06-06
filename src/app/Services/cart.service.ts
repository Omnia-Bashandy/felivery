import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartKey = 'cart';
  cartItemCount: number = 0;
  
  addToCart(item: any) {
    const cartItems = this.getCartItems();
    const existingItemIndex = cartItems.findIndex((cartItem: any) => cartItem.menuItemID.id === item.menuItemID.id);

    if (existingItemIndex !== -1) {
      cartItems[existingItemIndex].quantity += item.quantity;
    } else {
      cartItems.push(item);
    }

    this.updateCartItems(cartItems);
  }

  updateCartItems(cartItems: any[]) {
    localStorage.setItem(this.cartKey, JSON.stringify(cartItems));
  }

  getCartItems(): any[] {
    const cartItemsString = localStorage.getItem(this.cartKey);
    if (cartItemsString) {
      return JSON.parse(cartItemsString);
    }
    return [];
  }

  deleteFromCart(itemId: any) {
    const cartItems = this.getCartItems();
    const index = cartItems.findIndex((cartItem: any) => cartItem.menuItemID.id === itemId);
    if(index !== -1){
      cartItems.splice(index, 1);
    }
    this.updateCartItems(cartItems);
  }

  clearCart() {
    // Clear the cart items from local storage
    localStorage.removeItem(this.cartKey);
  }

  getCartItemsCount(){
    // 3shan ahotaha 3la icon l shopping
    const cartItems = this.getCartItems();
    this.cartItemCount = cartItems.reduce((total: number, item: any) => total + item.quantity, 0);
  }
  // private cartKey = 'cart';
  // cartItemCount: number = 0;
  
  // addToCart(item: any) {
  //   const cartItems = this.getCartItems();
  //   const existingItemIndex = cartItems.findIndex((cartItem: any) => cartItem.menuItemID.id === item.menuItemID.id);

  //   if (existingItemIndex !== -1) {
  //     cartItems[existingItemIndex].quantity += item.quantity;
  //   } else {
  //     cartItems.push(item);
  //   }

  //   this.updateCartItems(cartItems);
  // }

  // updateCartItems(cartItems: any[]) {
  //   localStorage.setItem(this.cartKey, JSON.stringify(cartItems));
  // }

  // getCartItems(): any[] {
  //   const cartItemsString = localStorage.getItem(this.cartKey);

  //   if (cartItemsString) {
  //     return JSON.parse(cartItemsString);
  //   }

  //   return [];
  // }

  // deleteFromCart(itemId: string) {
  //   const cartItems = this.getCartItems();
  //   const index = cartItems.findIndex((cartItem: any) => cartItem.menuItemID.id === itemId);

  //   if (index !== -1) {
  //     cartItems.splice(index, 1);
  //   }

  //   this.updateCartItems(cartItems);
  // }
  // clearCart() {
  //   // Clear the cart items from local storage
  //   localStorage.removeItem(this.cartKey);
  // }

  // getCartItemsCount(){
  //   const cartItems = this.getCartItems();
  //   this.cartItemCount = cartItems.reduce((total: number, item: any) => total + item.quantity, 0);
  // }
}
