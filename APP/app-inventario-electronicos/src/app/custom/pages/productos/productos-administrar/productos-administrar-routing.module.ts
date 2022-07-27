import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductosAdministrarComponent } from './productos-administrar.component';

const routes: Routes = [
  {
    path: '',
    component: ProductosAdministrarComponent,
    data: {
      title: 'Administrar Productos',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosAdministrarRoutingModule { }
