import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrasladosAdministrarComponent } from './traslados-administrar.component';

const routes: Routes = [
  {
    path: '',
    component: TrasladosAdministrarComponent,
    data: {
      title: 'Administrar Translados',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrasladosAdministrarRoutingModule { }
