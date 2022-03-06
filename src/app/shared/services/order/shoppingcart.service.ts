import { Injectable } from "@angular/core";
import { OrderItem } from "src/app/model/OrderItem";

const ITEMS_KEY = 'cart_items';

@Injectable({
    providedIn: "root"
  })
  export class ShoppingCartService {
    
    constructor() {}
  
    items: OrderItem[] = [];  

    addToCart(addedItem: OrderItem) {
      this.items.push(addedItem); 
      this.saveCart();
    }
  
    saveCart(): void {
      localStorage.setItem('cart_items', JSON.stringify(this.items)); 
    }

    loadCart(): void {
      this.items = JSON.parse(localStorage.getItem(ITEMS_KEY) ||"[]");
    }

    getItems(): OrderItem[] {
      return this.items;
    } 

    removeItem(item: OrderItem) {
      const index = this.items.findIndex((o: OrderItem) => o.id === item.id);
  
      if (index > -1) {
        this.items.splice(index, 1);
        this.saveCart();
      }
    }

    clearCart(items: OrderItem[]) {
      this.items = [];
      localStorage.removeItem('cart_items');
    }
  }