import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { UserRoutingModule } from "./user-routing.module";
import { UNavbarComponent } from './u-navbar/u-navbar.component';
import { UserDashboardComponent } from "./user-dashboard/user-dashboard.component";
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';

@NgModule({
    declarations: [
    UserDashboardComponent,
    UNavbarComponent,
    ShoppingCartComponent,
    UserOrdersComponent,
  ],
    imports: [
      CommonModule,
      UserRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      NgbModule,
    ]
  })

  export class UserModule { }