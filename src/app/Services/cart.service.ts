import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private  cartKey= 'cart';

  addToCart(item: any) {
    // Retrieve the cart items from local storage
    const cartItems = this.getCartItems();

    // Push the new item to the cart array
    cartItems.push(item);

    // Update the cart items in local storage
    localStorage.setItem(this.cartKey, JSON.stringify(cartItems));
  }

  getCartItems(): any[] {
    // Retrieve the cart items from local storage
    const cartItemsString = localStorage.getItem(this.cartKey);

    // Parse the cart items from the string representation
    if (cartItemsString) {
      return JSON.parse(cartItemsString);
    }

    // Return an empty array if no cart items are found
    return [];
  }

  deleteFromCart(itemId: string) {
    // Retrieve the cart items from local storage
    const cartItems = this.getCartItems();
  
    // Find the index of the item to be deleted
    const index = cartItems.findIndex((cartItem: any) => cartItem.id === itemId);
  
    // If the item is found, remove it from the cart array
    if (index !== -1) {
      cartItems.splice(index, 1);
      console.log(cartItems);
      
    }
  
    // Update the cart items in local storage
    localStorage.setItem(this.cartKey, JSON.stringify(cartItems));
  }
  
  
}
