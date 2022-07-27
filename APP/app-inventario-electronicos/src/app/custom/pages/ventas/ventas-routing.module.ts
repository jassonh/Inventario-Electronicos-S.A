import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Ventas',
      status: true
    },
    children: [
      {
        path: '',
        redirectTo: 'administrar',
      },
      {
        path: 'administrar',
        loadChildren: './ventas-administrar/ventas-administrar.module#VentasAdministrarModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentasRoutingModule { }
