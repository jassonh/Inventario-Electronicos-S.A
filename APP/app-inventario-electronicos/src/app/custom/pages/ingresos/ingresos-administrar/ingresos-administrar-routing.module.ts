import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngresosAdministrarComponent } from './ingresos-administrar.component';

const routes: Routes = [
  {
    path: '',
    component: IngresosAdministrarComponent,
    data: {
      title: 'Administrar Ingresos',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngresosAdministrarRoutingModule { }
