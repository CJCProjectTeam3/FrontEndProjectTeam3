import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentLoanDetailsComponent } from './current-loan-details/current-loan-details.component';

const routes: Routes = [
  {path : 'currentLoanDetails', component:CurrentLoanDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoModuleRoutingModule { }
