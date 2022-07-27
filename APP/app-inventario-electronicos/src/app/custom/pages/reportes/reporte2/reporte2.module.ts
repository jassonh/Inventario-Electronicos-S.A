import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Reporte2RoutingModule } from './reporte2-routing.module';
import { Reporte2Component } from './reporte2.component';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    Reporte2RoutingModule,
    SharedModule
  ],
  declarations: [
    Reporte2Component
  ]
})
export class Reporte2Module { }
