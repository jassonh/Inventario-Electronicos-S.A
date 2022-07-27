import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ClientesAdministrarComponent } from './clientes-administrar.component';


const routes: Routes = [
  {
    path: '',
    component: ClientesAdministrarComponent,
    data: {
      title: 'Administrar Clientes',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesAdministrarRoutingModule { }
