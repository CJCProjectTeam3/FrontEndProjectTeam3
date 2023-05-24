import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { EmiCalculatorComponent } from './emi-calculator/emi-calculator.component';

const routes: Routes = [
  {
    path:'', component:LoginComponent,
    children : [
      {path : '' , component:LoginFormComponent},
      {path : 'appliCationForm', component: ApplicationFormComponent},
      {path: 'adminLogin', component:AdminLoginComponent },
      {path: 'emiCalculator', component:EmiCalculatorComponent}
    ]

  },
  // {path:'home/emiCalculator', c}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignInRoutingModule { }
