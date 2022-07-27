import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Reporte3RoutingModule } from './reporte3-routing.module';
import { Reporte3Component } from './reporte3.component';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    Reporte3RoutingModule,
    SharedModule
  ],
  declarations: [
    Reporte3Component
  ]
})
export class Reporte3Module { }
