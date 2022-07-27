import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Reporte4Component } from './reporte4.component';

const routes: Routes = [
  {
    path: '',
    component: Reporte4Component,
    data: {
      title: 'Existencia de productos por sucursal',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Reporte4RoutingModule { }
