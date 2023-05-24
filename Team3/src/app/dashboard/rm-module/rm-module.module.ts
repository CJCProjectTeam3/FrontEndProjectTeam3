import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RmModuleRoutingModule } from './rm-module-routing.module';
import { EnquiriesComponent } from './enquiries/enquiries.component';
import { ApprovedComponent } from './approved/approved.component';
import { LoanApplicationComponent } from './loan-application/loan-application.component';
import { RejectedComponent } from './rejected/rejected.component';


@NgModule({
  declarations: [
    EnquiriesComponent,
    ApprovedComponent,
    LoanApplicationComponent,
    RejectedComponent
  ],
  imports: [
    CommonModule,
    RmModuleRoutingModule
  ]
})
export class RmModuleModule { }
