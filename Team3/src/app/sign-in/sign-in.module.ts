import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInRoutingModule } from './sign-in-routing.module';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { EmiCalculatorComponent } from './emi-calculator/emi-calculator.component';


@NgModule({
  declarations: [
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    LoginFormComponent,
    ApplicationFormComponent,
    AdminLoginComponent,
    EmiCalculatorComponent,
  ],
  imports: [
    CommonModule,
    SignInRoutingModule
  ]
})
export class SignInModule { }
