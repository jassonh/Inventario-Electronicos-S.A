import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Reporte1Component } from './reporte1.component';

const routes: Routes = [
  {
    path: '',
    component: Reporte1Component,
    data: {
      title: 'Existencia de productos en bodega central',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Reporte1RoutingModule { }
