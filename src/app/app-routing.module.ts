import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/components/login/login.component';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard-routing.module').then( m => m.DashboardRoutingModule )
  },

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

  {
    path: '',
    loadChildren: () => import('./modules/registration/registration-routing.module').then( m => m.RegistrationRoutingModule )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
