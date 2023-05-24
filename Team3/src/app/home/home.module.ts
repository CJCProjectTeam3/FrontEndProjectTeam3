import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MainComponent } from './main/main.component';
import { CardsComponent } from './cards/cards.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { DashHeaderComponent } from '../dashboard/templates/dash-header/dash-header.component';
import { DashHomeComponent } from '../dashboard/templates/dash-home/dash-home.component';
import { DashMainComponent } from '../dashboard/templates/dash-main/dash-main.component';
import { DashSidebarComponent } from '../dashboard/templates/dash-sidebar/dash-sidebar.component';
import { EnquiryFormComponent } from './enquiry-form/enquiry-form.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    MainComponent,
    CardsComponent,
    SignInComponent,
    AdminLoginComponent,
    DashHeaderComponent,
    DashHomeComponent,
    DashMainComponent,
    DashSidebarComponent,
    EnquiryFormComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ModalModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
