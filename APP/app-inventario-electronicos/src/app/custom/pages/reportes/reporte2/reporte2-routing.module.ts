import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Reporte2Component } from './reporte2.component';

const routes: Routes = [
  {
    path: '',
    component: Reporte2Component,
    data: {
      title: 'Ingresos por proveedor',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Reporte2RoutingModule { }
