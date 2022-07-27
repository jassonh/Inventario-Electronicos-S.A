import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Reporte1Component } from './reporte1/reporte1.component';
import { Reporte2Component } from './reporte2/reporte2.component';
import { Reporte3Component } from './reporte3/reporte3.component';
import { Reporte4Component } from './reporte4/reporte4.component';
import { Reporte5Component } from './reporte5/reporte5.component';
import { Reporte6Component } from './reporte6/reporte6.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Reportes',
      status: true
    },
    children: [
      {
        path: '',
        redirectTo: 'reporte1',
      },
      {
        path: 'reporte1',
        loadChildren: './reporte1/reporte1.module#Reporte1Module'
      },
      {
        path: 'reporte2',
        loadChildren: './reporte2/reporte2.module#Reporte2Module'
      },
      {
        path: 'reporte3',
        loadChildren: './reporte3/reporte3.module#Reporte3Module'
      },
      {
        path: 'reporte4',
        loadChildren: './reporte4/reporte4.module#Reporte4Module'
      },
      {
        path: 'reporte5',
        loadChildren: './reporte5/reporte5.module#Reporte5Module'
      },
      {
        path: 'reporte6',
        loadChildren: './reporte6/reporte6.module#Reporte6Module'
      }
    ]    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportesRoutingModule { }
