import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Reporte3Component } from './reporte3.component';

const routes: Routes = [
  {
    path: '',
    component: Reporte3Component,
    data: {
      title: 'Proveedores con más pedidos',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Reporte3RoutingModule { }
