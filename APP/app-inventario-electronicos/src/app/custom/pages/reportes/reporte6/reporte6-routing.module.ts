import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Reporte6Component } from './reporte6.component';

const routes: Routes = [
  {
    path: '',
    component: Reporte6Component,
    data: {
      title: 'Datos de sucursales',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Reporte6RoutingModule { }
