import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VentasAdministrarComponent } from './ventas-administrar.component';

const routes: Routes = [
  {
    path: '',
    component: VentasAdministrarComponent,
    data: {
      title: 'Administrar Ventas',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentasAdministrarRoutingModule { }
