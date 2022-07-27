import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Reporte1RoutingModule } from './reporte1-routing.module';
import { Reporte1Component } from './reporte1.component';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    Reporte1RoutingModule,
    SharedModule
  ],
  declarations: [
    Reporte1Component
  ]
})
export class Reporte1Module { }
