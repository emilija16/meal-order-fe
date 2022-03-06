import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Order } from "src/app/model/Order";
import { User } from "src/app/model/User.model";
import { environment } from "src/environments/environment";

const orderUrl = environment.orderUrl;
const orderUrl2 = environment.orderUrl + "/ordersByUser"

@Injectable({
    providedIn: 'root'
  })
  
  export class OrderService {
    constructor(private http: HttpClient) {}

    order(order: Order): Observable<Order> {
      return this.http.post<Order>(orderUrl,
        order
      );
    }

    getUserOrders(): Observable<Order[]> {
      return this.http.get<Order[]>(orderUrl + "/userOrders");
    }

    getAllOrders(): Observable<Order[]> {
      return this.http.get<Order[]>(orderUrl);
    }

    getOrderById(id: number):Observable<Order> {
      return this.http.get<Order>(`${orderUrl}/${id}`);
    }

    findOrdersByUserEmail(id:number): Observable<Order[]> {
      return this.http.get<Order[]>(`${orderUrl2}/${id}`);
    }
  }