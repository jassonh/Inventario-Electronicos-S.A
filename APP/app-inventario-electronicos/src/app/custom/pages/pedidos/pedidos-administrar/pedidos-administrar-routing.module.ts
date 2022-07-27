import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PedidosAdministrarComponent } from './pedidos-administrar.component';

const routes: Routes = [
  {
    path: '',
    component: PedidosAdministrarComponent,
    data: {
      title: 'Administrar Pedidos',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidosAdministrarRoutingModule { }
