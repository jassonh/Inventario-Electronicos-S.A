import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentasAdministrarRoutingModule } from './ventas-administrar-routing.module';
import { VentasAdministrarComponent } from './ventas-administrar.component';
import {SharedModule} from '../../../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ToastyModule } from 'ng2-toasty';

@NgModule({
  imports: [
    CommonModule,
    VentasAdministrarRoutingModule,
    SharedModule,
    ToastyModule.forRoot(),
    NgxDatatableModule,
    FormsModule
  ],
  declarations: [VentasAdministrarComponent]
})
export class VentasAdministrarModule { }
