import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model/Order';
import { OrderItem } from 'src/app/model/OrderItem';
import { OrderService } from 'src/app/shared/services/order/order.service';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.scss']
})
export class UserOrdersComponent implements OnInit {

  orders: Order[] = [];
  orderItems: OrderItem[] = [];

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.getUserOrdersFromService()
  }

  getUserOrdersFromService() {
    this.orderService.getUserOrders().subscribe(data => {
      this.orders = data;
      console.log(this.orders) 
    })
    this.orders.map(t=> { 
      return { 
          shoppingItems: this.orderItems.filter(x=>x.order.id == t.id) 
      } 
  })
  }
  
}
