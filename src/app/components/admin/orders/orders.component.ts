import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Order } from 'src/app/model/Order';
import { User } from 'src/app/model/User.model';
import { OrderService } from 'src/app/shared/services/order/order.service';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  providers: [DecimalPipe]
})
export class OrdersComponent implements OnInit {

  ordersList: Order[] = [];
  filter = new FormControl('');
  order: Order = {} as Order
  users: User[] = []
  usersList: User[] = [];
  noOrders = false;

  constructor(private orderService: OrderService, private router: Router, private userService: UserService) {
  }

  ngOnInit(): void {
    this.getOrdersFromService();
    this.getUsersFromService();
  }

  public valueSelected(e: any) {
    const userSelected = e.target.value;
    console.log(e.target.value)
    if(userSelected === "") {
      this.getOrdersFromService();
    }
    else {
      this.orderService.findOrdersByUserEmail(userSelected).subscribe(data => {
        this.ordersList = data;
        if(this.ordersList.length === 0) {
          this.noOrders = true;
        }
        else {
          this.noOrders = false;
        }
      })
    }
  }

  getOrdersFromService() {
    this.orderService.getAllOrders().subscribe(data$ => {
      this.ordersList = data$;
      console.log(data$)
    },
      error => {
        console.log(error)
      }
    )
  }

  getUsersFromService() {
    this.userService.getAll().subscribe(data => {
      this.users = data;
      console.log(data)
    },
      error => {
        console.log(error)
      }
    )
  }

  orderDetails(id: number) {
    this.router.navigate(['admin/order-details', id])
  }
}
