import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http'




@NgModule({
  declarations: [
    AppComponent,
 


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule.forRoot(),
    HttpClientModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
