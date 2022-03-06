import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin-dashboard/admin.component';
import { AddMealTypeComponent } from './meals/mealtype/add-meal-type/add-meal-type.component';
import { AddMealComponent } from './meals/add-meal/add-meal.component';
import { MealTypeComponent } from './meals/mealtype/meal-type/meal-type.component';
import { EditMealTypeComponent } from './meals/mealtype/edit-meal-type/edit-meal-type.component';
import { MealSizeComponent } from './meals/meal-size/meal-size.component';
import { AddMealSizeComponent } from './meals/meal-size/add-meal-size/add-meal-size.component';
import { EditMealSizeComponent } from './meals/meal-size/edit-meal-size/edit-meal-size.component';
import { MealsComponent } from './meals/meals.component';
import { EditMealComponent } from './meals/edit-meal/edit-meal.component';
import { AddMenuComponent } from './meals/add-menu/add-menu.component';
import { UsersComponent } from './users/users.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderDetailsComponent } from '../user/order-details/order-details.component';

const routes: Routes = [
    { path: '', component: AdminComponent, children: [
      { path: 'meals', component: MealsComponent },
      { path: 'meal-type', component: MealTypeComponent },
      { path: 'add-meal-type', component: AddMealTypeComponent },
      { path: 'edit-meal-type/:id', component: EditMealTypeComponent },
      { path: 'meal-size', component: MealSizeComponent },
      { path: 'add-meal-size', component: AddMealSizeComponent },
      { path: 'edit-meal-size/:id', component: EditMealSizeComponent },
      { path: 'add-meal', component: AddMealComponent },
      { path: 'edit-meal/:id', component: EditMealComponent },
      { path: 'add-menu', component:  AddMenuComponent},
      { path: 'users', component:  UsersComponent},
      { path: 'orders', component: OrdersComponent},
      { path: 'order-details/:id', component: OrderDetailsComponent },
    ]},
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AdminRoutingModule { }
  