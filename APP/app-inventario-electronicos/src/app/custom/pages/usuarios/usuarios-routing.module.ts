import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Usuarios',
      status: true
    },
    children: [
      {
        path: '',
        redirectTo: 'administrar',
      },
      {
        path: 'administrar',
        loadChildren: './usuarios-administrar/usuarios-administrar.module#UsuariosAdministrarModule'
      },
      {
        path: 'roles',
        loadChildren: './roles/roles.module#RolesModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
