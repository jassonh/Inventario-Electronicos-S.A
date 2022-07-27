import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Clientes',
      status: true
    },
    children: [
      {
        path: '',
        redirectTo: 'administrar',
      },
      {
        path: 'administrar',
        loadChildren: './clientes-administrar/clientes-administrar.module#ClientesAdministrarModule'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
