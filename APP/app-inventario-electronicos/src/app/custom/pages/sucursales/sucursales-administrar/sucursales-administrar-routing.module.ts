import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SucursalesAdministrarComponent } from './sucursales-administrar.component';

const routes: Routes = [
  {
    path: '',
    component: SucursalesAdministrarComponent,
    data: {
      title: 'Administrar Sucursales',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SucursalesAdministrarRoutingModule { }
