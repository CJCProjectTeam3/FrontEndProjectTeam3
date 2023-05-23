import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoModuleRoutingModule } from './po-module-routing.module';
import { CurrentLoanDetailsComponent } from './current-loan-details/current-loan-details.component';


@NgModule({
  declarations: [
    CurrentLoanDetailsComponent
  ],
  imports: [
    CommonModule,
    PoModuleRoutingModule
  ]
})
export class PoModuleModule { }
