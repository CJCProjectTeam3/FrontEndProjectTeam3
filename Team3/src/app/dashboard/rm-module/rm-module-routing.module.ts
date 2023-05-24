import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnquiriesComponent } from './enquiries/enquiries.component';
import { ApprovedComponent } from './approved/approved.component';
import { RejectedComponent } from './rejected/rejected.component';
import { LoanApplicationComponent } from './loan-application/loan-application.component';

const routes: Routes = [
  {path:'enquiries', component:EnquiriesComponent},
  {path:'approved', component:ApprovedComponent},
  {path:'rejected', component : RejectedComponent},
  {path:'loanApplication', component:LoanApplicationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RmModuleRoutingModule { }
