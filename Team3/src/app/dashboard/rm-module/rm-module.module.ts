import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RmModuleRoutingModule } from './rm-module-routing.module';
import { EnquiriesComponent } from './enquiries/enquiries.component';
import { ApprovedComponent } from './approved/approved.component';
import { LoanApplicationComponent } from './loan-application/loan-application.component';
import { RejectedComponent } from './rejected/rejected.component';
import { CibilCheckComponent } from './cibil-check/cibil-check.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EnquiriesComponent,
    ApprovedComponent,
    LoanApplicationComponent,
    RejectedComponent,
    CibilCheckComponent
  ],
  imports: [
    CommonModule,
    RmModuleRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
 exports: []
})
export class RmModuleModule { }
