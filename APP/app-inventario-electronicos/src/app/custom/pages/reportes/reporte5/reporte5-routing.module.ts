import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Reporte5Component } from './reporte5.component';

const routes: Routes = [
  {
    path: '',
    component: Reporte5Component,
    data: {
      title: 'Datos de proveedores',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Reporte5RoutingModule { }
