import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { MyCartComponent } from './components/my-cart/my-cart.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ViewCartComponent } from './components/products/view-cart/view-cart.component';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogConfig, MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    ProductsComponent,
    MyCartComponent,
    DashboardComponent,
    ViewCartComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatCheckboxModule,
    MatDialogModule
  ]
})
export class DashboardModule { }
