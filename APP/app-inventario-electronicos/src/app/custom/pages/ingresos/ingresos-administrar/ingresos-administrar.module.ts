import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngresosAdministrarRoutingModule } from './ingresos-administrar-routing.module';
import { IngresosAdministrarComponent } from './ingresos-administrar.component';
import {SharedModule} from '../../../../shared/shared.module';
import { ToastyModule } from 'ng2-toasty';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    IngresosAdministrarRoutingModule,
    SharedModule,
    ToastyModule.forRoot(),
    NgxDatatableModule,
    FormsModule
  ],
  declarations: [IngresosAdministrarComponent]
})
export class IngresosAdministrarModule { }
