import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IoModuleRoutingModule } from './io-module-routing.module';
import { MortgageDetailsComponent } from './mortgage-details/mortgage-details.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { GaurantorDetailsComponent } from './gaurantor-details/gaurantor-details.component';


@NgModule({
  declarations: [
    MortgageDetailsComponent,
    PropertyDetailsComponent,
    GaurantorDetailsComponent
  ],
  imports: [
    CommonModule,
    IoModuleRoutingModule
  ]
})
export class IoModuleModule { }
