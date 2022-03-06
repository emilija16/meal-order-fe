import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DailyMenu } from 'src/app/model/DailyMenu';
import { Meal } from 'src/app/model/Meal';
import { OrderItem } from 'src/app/model/OrderItem';
import { TokenStorageService } from 'src/app/shared/services/auth/token-storage.service';
import { MealService } from 'src/app/shared/services/meal/meal.service';
import { DailyMenuService } from 'src/app/shared/services/menu/dailyMenu.service';
import { ShoppingCartService } from 'src/app/shared/services/order/shoppingcart.service';

@Component({
  selector: 'app-daily-menu',
  templateUrl: './daily-menu.component.html',
  styleUrls: ['./daily-menu.component.scss']
})
export class DailyMenuComponent implements OnInit {

  dailyMenus: DailyMenu[] = [];
  today = new Date();
  mealsDailyMenu: Meal[] = [];
  todayDateFormat = formatDate(this.today, 'yyyy-MM-dd', 'en-US');
  quantity: number = 1;
  items: OrderItem[] = []
  orderItem: OrderItem = {} as OrderItem;
  user: any;
  buttonEnabled = true;
  meals: Meal[] = []
  errorMessage = false;

  constructor(private dailyMenuService: DailyMenuService,
              private shoppingCartService: ShoppingCartService,
              private toastr: ToastrService,
              private tokenStorageService: TokenStorageService,
              private mealService: MealService) {
              }

  ngOnInit(): void {
    this.user = this.tokenStorageService.getUser();
    if (Object.keys(this.user).length === 0) {
      this.buttonEnabled = false;
    }
    this.shoppingCartService.loadCart();
    this.getDailyMenus();
    console.log(this.user)
  }

  getDailyMenus() {
    this.dailyMenuService.getAll().subscribe(data => {
      this.dailyMenus = data;
      console.log(data)
      for(let i = 0; i < this.dailyMenus.length; i++) 
      {
        console.log(this.dailyMenus[i]);
        if(this.dailyMenus[i].date === this.todayDateFormat) {
          this.mealsDailyMenu = this.dailyMenus[i].meals;
        }
      }

      for(let i = 0; i < this.mealsDailyMenu.length; i++) {
        console.log("****" + this.mealsDailyMenu[i].tomorrow)
      }
    },
      error => {
        console.log(error)
      }
    )
  }

  addToCart(item: any) {
    if(this.quantity < 0) {
      this.errorMessage = true;
      return;
    }
    else {
      this.orderItem.quantity = this.quantity;
      this.orderItem.meal = item;
      this.shoppingCartService.addToCart(this.orderItem);
      this.items = [...this.shoppingCartService.getItems()]; 
      this.toastr.success("Meal successfully added to your shopping cart!", 'Success');
    }
  }  
}