import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaonDisbursmentComponent } from './laon-disbursment/laon-disbursment.component';
import { LedgerComponent } from './ledger/ledger.component';
import { SanctionLetterComponent } from './sanction-letter/sanction-letter.component';

const routes: Routes = [
  {path:'loanDisbursement', component:LaonDisbursmentComponent},
  {path:'ledger', component:LedgerComponent},
  {path:'sanctionLetter', component : SanctionLetterComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoModuleRoutingModule { }
