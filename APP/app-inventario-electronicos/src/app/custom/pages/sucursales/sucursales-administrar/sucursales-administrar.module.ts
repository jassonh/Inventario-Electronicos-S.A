import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SucursalesAdministrarRoutingModule } from './sucursales-administrar-routing.module';
import { SucursalesAdministrarComponent } from './sucursales-administrar.component';
import {SharedModule} from '../../../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ToastyModule } from 'ng2-toasty';

@NgModule({
  imports: [
    CommonModule,
    SucursalesAdministrarRoutingModule,
    SharedModule,
    ToastyModule.forRoot(),
    NgxDatatableModule,
    FormsModule
  ],
  declarations: [SucursalesAdministrarComponent]
})
export class SucursalesAdministrarModule { }
