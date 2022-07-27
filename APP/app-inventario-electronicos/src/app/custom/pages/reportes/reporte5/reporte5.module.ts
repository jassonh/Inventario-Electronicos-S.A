import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Reporte5RoutingModule } from './reporte5-routing.module';
import { Reporte5Component } from './reporte5.component';
import { SharedModule } from '../../../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    Reporte5RoutingModule,
    SharedModule
  ],
  declarations: [
    Reporte5Component
  ]
})
export class Reporte5Module { }
