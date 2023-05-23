import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoModuleRoutingModule } from './do-module-routing.module';
import { LaonDisbursmentComponent } from './laon-disbursment/laon-disbursment.component';
import { LedgerComponent } from './ledger/ledger.component';
import { SanctionLetterComponent } from './sanction-letter/sanction-letter.component';


@NgModule({
  declarations: [
    LaonDisbursmentComponent,
    LedgerComponent,
    SanctionLetterComponent
  ],
  imports: [
    CommonModule,
    DoModuleRoutingModule
  ]
})
export class DoModuleModule { }
