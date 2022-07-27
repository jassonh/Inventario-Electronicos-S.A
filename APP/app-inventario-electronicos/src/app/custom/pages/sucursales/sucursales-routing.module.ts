import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Sucursales',
      status: true
    },
    children: [
      {
        path: '',
        redirectTo: 'administrar',
      },
      {
        path: 'administrar',
        loadChildren: './sucursales-administrar/sucursales-administrar.module#SucursalesAdministrarModule'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SucursalesRoutingModule { }
