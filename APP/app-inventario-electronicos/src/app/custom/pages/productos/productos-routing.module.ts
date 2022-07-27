import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Productos',
      status: true
    },
    children: [
      {
        path: '',
        redirectTo: 'administrar',
      },
      {
        path: 'administrar',
        loadChildren: './productos-administrar/productos-administrar.module#ProductosAdministrarModule'
      },
      {
        path: 'categorias',
        loadChildren: './productos-categorias/productos-categorias.module#ProductosCategoriasModule'
      },
      {
        path: 'inventario',
        loadChildren: './inventario/inventario.module#InventarioModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
