import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProveedoresAdministrarComponent } from './proveedores-administrar.component';

const routes: Routes = [
  {
    path: '',
    component: ProveedoresAdministrarComponent,
    data: {
      title: 'Administrar Proveedores',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProveedoresAdministrarRoutingModule { }
