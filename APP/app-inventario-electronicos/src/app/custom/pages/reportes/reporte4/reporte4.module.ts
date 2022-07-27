import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Reporte4RoutingModule } from './reporte4-routing.module';
import { Reporte4Component } from './reporte4.component';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    Reporte4RoutingModule,
    SharedModule
  ],
  declarations: [
    Reporte4Component
  ]
})
export class Reporte4Module { }
