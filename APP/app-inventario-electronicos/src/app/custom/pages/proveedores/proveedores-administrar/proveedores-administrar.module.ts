import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProveedoresAdministrarRoutingModule } from './proveedores-administrar-routing.module';
import { ProveedoresAdministrarComponent } from './proveedores-administrar.component';
import {SharedModule} from '../../../../shared/shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ToastyModule } from 'ng2-toasty';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ProveedoresAdministrarRoutingModule,
    SharedModule,
    ToastyModule.forRoot(),
    NgxDatatableModule,
    FormsModule
  ],
  declarations: [ProveedoresAdministrarComponent]
})
export class ProveedoresAdministrarModule { }
