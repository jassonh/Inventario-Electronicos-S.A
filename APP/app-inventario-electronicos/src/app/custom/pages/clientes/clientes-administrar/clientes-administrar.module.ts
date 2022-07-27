import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesAdministrarComponent } from './clientes-administrar.component';
import { ClientesAdministrarRoutingModule } from './clientes-administrar-routing.module';
import {SharedModule} from '../../../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ToastyModule } from 'ng2-toasty';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ClientesAdministrarRoutingModule,
    SharedModule,
    ToastyModule.forRoot(),
    NgxDatatableModule
  ],
  declarations: [ClientesAdministrarComponent]
})
export class ClientesAdministrarModule { }