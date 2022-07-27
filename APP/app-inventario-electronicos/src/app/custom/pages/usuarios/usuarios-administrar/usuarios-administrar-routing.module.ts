import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosAdministrarComponent } from './usuarios-administrar.component';

const routes: Routes = [
  {
    path: '',
    component: UsuariosAdministrarComponent,
    data: {
      title: 'Administrar Usuarios',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosAdministrarRoutingModule { }
