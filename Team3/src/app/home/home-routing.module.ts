import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { DashHomeComponent } from '../dashboard/templates/dash-home/dash-home.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { EnquiryFormComponent } from './enquiry-form/enquiry-form.component';

console.log("In home routing module");


const routes: Routes = [

  {
    path: 'home', component: HomeComponent, children: [
      { path: 'toSignIn', component: SignInComponent },
      
    ]
  },

  {
    path: 'dashHome', component: DashHomeComponent, children: [
      {
        path: 'RM', loadChildren: () => import('src/app/dashboard/rm-module/rm-module-routing.module').then(e => e.RmModuleRoutingModule)
      },

      {
        path: 'io', loadChildren: () => import('src/app/dashboard/io-module/io-module.module').then(r => r.IoModuleModule)
      },

      {
        path: 'do', loadChildren: () => import('src/app/dashboard/do-module/do-module.module').then(e => e.DoModuleModule)
      },

      {
        path: 'po', loadChildren: () => import('src/app/dashboard/po-module/po-module.module').then(e => e.PoModuleModule)

      }
    ]
  },
  { path: '**', component: ErrorPageComponent },



  { path: 'signin', loadChildren: () => import('src/app/sign-in/sign-in.module').then(e => e.SignInModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
