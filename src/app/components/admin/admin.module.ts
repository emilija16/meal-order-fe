import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ANavbarComponent } from "./a-navbar/a-navbar.component";
import { AdminRoutingModule } from "./admin-routing.module";
import { AdminComponent } from "./admin-dashboard/admin.component";
import { ASidebarComponent } from './a-sidebar/a-sidebar.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddMealTypeComponent } from "./meals/mealtype/add-meal-type/add-meal-type.component";
import { AddMealComponent } from './meals/add-meal/add-meal.component';
import { MealTypeComponent } from './meals/mealtype/meal-type/meal-type.component';
import { EditMealTypeComponent } from './meals/mealtype/edit-meal-type/edit-meal-type.component';
import { MealSizeComponent } from './meals/meal-size/meal-size.component';
import { AddMealSizeComponent } from './meals/meal-size/add-meal-size/add-meal-size.component';
import { EditMealSizeComponent } from './meals/meal-size/edit-meal-size/edit-meal-size.component';
import { MealsComponent } from "./meals/meals.component";
import { EditMealComponent } from './meals/edit-meal/edit-meal.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AddMenuComponent } from "./meals/add-menu/add-menu.component";
import { UsersComponent } from './users/users.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderDetailsComponent } from "../user/order-details/order-details.component";

@NgModule({
    declarations: [AdminComponent, ANavbarComponent, ASidebarComponent, AddMealTypeComponent, AddMealComponent, MealTypeComponent, EditMealTypeComponent, MealSizeComponent, AddMealSizeComponent, EditMealSizeComponent, MealsComponent, EditMealComponent, AddMenuComponent, UsersComponent, OrdersComponent, OrderDetailsComponent],
    imports: [
      CommonModule,
      AdminRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      NgbModule,
      
    ],
  })

  export class AdminModule { }