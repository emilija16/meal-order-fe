import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DailyMenuComponent } from "./daily-menu/daily-menu.component";
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";
import { UserDashboardComponent } from "./user-dashboard/user-dashboard.component";
import { UserOrdersComponent } from "./user-orders/user-orders.component";

const routes: Routes = [
    { path: '', component: UserDashboardComponent, children: [
      { path: 'shopping-cart', component: ShoppingCartComponent },
      { path: 'user-orders', component: UserOrdersComponent },
      { path: 'daily-menu', component: DailyMenuComponent },
    ] },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class UserRoutingModule { }