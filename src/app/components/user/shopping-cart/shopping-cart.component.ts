import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Order } from 'src/app/model/Order';
import { OrderItem } from 'src/app/model/OrderItem';
import { TokenStorageService } from 'src/app/shared/services/auth/token-storage.service';
import { OrderService } from 'src/app/shared/services/order/order.service';
import { ShoppingCartService } from 'src/app/shared/services/order/shoppingcart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  orderItems: OrderItem[] = [];
  order: Order = {} as Order;
  isEmpty = false;
  tokenDecoded: any;
  today = new Date();
  invalidTime = false;
  errorMessage = "";

  constructor(private shoppingCartService: ShoppingCartService, private orderService: OrderService,
     private tokenStorageService: TokenStorageService, private toastr: ToastrService, 
     config: NgbModalConfig, private modalService: NgbModal,
     private router: Router) { 
      config.backdrop = 'static';
      config.keyboard = false;
     }

  open(content: any) {
    this.modalService.open(content);
  }

  ngOnInit(): void {
    this.shoppingCartService.loadCart();
    this.orderItems = this.shoppingCartService.getItems();
    this.getShoppingCart();
  }

  getShoppingCart() { 
    if(this.orderItems.length <= 0) {
      this.isEmpty = true;
    }
    this.orderItems = this.shoppingCartService.getItems();
    console.log(this.orderItems)
    
    console.log(this.isEmpty)
 }

 removeFromCart(item: OrderItem) {
  this.shoppingCartService.removeItem(item);
  this.orderItems = this.shoppingCartService.getItems();
  if(this.orderItems.length <= 0) {
    this.isEmpty = true;
  }
  }

  get total()
  {
    return this.orderItems.reduce((sum,x)=>
    ({quantity:1,
      priceWhenBought:sum.priceWhenBought+x.quantity*x.meal.price}),
    {quantity:1,priceWhenBought:0}).priceWhenBought;
  }

  orderMeals() {
    const todayDateFormat = formatDate(this.today, 'yyyy-MM-dd hh:mm:ss', 'en-US');
    console.log(todayDateFormat)
    const user = this.tokenStorageService.getUser();
    this.order.user = user;
    this.order.shoppingItems = this.orderItems;
    this.order.totalPrice = this.total;
    this.order.orderDateTime = todayDateFormat;
    console.log(JSON.stringify(this.order))
    this.orderService.order(this.order).subscribe(data => {
      data = this.order;
      console.log(data);
      this.toastr.success("Order completed successfully!", "Thank you!")
      this.shoppingCartService.clearCart(this.orderItems);
      this.orderItems = []
      this.getShoppingCart()
      this.router.navigateByUrl('user/user-orders')
    },
    error => {
      this.errorMessage = error.error;
    })
  }
}