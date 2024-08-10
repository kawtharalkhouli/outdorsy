import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { MyCartComponent } from './components/my-cart/my-cart.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,

    children: [
      {
        path: 'products',
        component: ProductsComponent,
      },

      {
        path: 'my-cart',
        component: MyCartComponent
      }

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
