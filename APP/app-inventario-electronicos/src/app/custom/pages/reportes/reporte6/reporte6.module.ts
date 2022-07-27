import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Reporte6RoutingModule } from './reporte6-routing.module';
import { Reporte6Component } from './reporte6.component';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    Reporte6RoutingModule,
    SharedModule
  ],
  declarations: [
    Reporte6Component
  ]
})
export class Reporte6Module { }
