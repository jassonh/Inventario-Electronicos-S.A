import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductosCategoriasComponent } from './productos-categorias.component';

const routes: Routes = [
  {
    path: '',
    component: ProductosCategoriasComponent,
    data: {
      title: 'Categorias de Productos',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosCategoriasRoutingModule { }
