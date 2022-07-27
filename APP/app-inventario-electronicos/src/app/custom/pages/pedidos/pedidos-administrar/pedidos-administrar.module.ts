import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidosAdministrarRoutingModule } from './pedidos-administrar-routing.module';
import { PedidosAdministrarComponent } from './pedidos-administrar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ToastyModule } from 'ng2-toasty';

@NgModule({
  imports: [
    CommonModule,
    PedidosAdministrarRoutingModule,
    SharedModule,
    ToastyModule.forRoot(),
    NgxDatatableModule,
    FormsModule
  ],
  declarations: [PedidosAdministrarComponent]
})
export class PedidosAdministrarModule { }
