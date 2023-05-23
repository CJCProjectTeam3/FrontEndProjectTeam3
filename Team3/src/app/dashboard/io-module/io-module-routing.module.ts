import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MortgageDetailsComponent } from './mortgage-details/mortgage-details.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { GaurantorDetailsComponent } from './gaurantor-details/gaurantor-details.component';

const routes: Routes = [
  {path:'mortgageDetails', component:MortgageDetailsComponent},
  {path:'propertyDetails', component:PropertyDetailsComponent},
  {path:'guarantorDetails', component:GaurantorDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IoModuleRoutingModule { }
