import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";
import { AppRoutingModule } from "src/app/app-routing.module";
import { HomePageComponent } from "src/app/components/home-page/home-page.component";
import { LoginComponent } from "src/app/components/login/login.component";
import { NavbarComponent } from "src/app/components/navbar/navbar.component";
import { RegistrationComponent } from "src/app/components/registration/registration.component";
import { DailyMenuComponent } from "../components/user/daily-menu/daily-menu.component";
import { AuthService } from "./services/auth/auth.service";
import { TokenStorageService } from "./services/auth/token-storage.service";

@NgModule({
    declarations: [
        NavbarComponent,
        HomePageComponent,
        RegistrationComponent,
        LoginComponent,
        DailyMenuComponent,

    ],
    imports: [
      AppRoutingModule,
      BrowserModule,
      FormsModule,
      BrowserAnimationsModule,
      ReactiveFormsModule,
      ToastrModule.forRoot()
    ],
    providers: [AuthService, TokenStorageService],
    bootstrap: []
  })
  export class SharedModule {}