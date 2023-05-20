import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'signin',  loadChildren:() => import('src/app/sign-in/sign-in.module').then(e => e.SignInModule)},
  // {path: 'applicationForm', loadChildren:() => import('src/app/sign-in/sign-in.module').then(e => e.SignInModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
