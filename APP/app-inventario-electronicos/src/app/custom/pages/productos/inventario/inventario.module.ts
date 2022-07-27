import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventarioRoutingModule } from './inventario-routing.module';
import { InventarioComponent } from './inventario.component';
import {SharedModule} from '../../../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ToastyModule } from 'ng2-toasty';

@NgModule({
  imports: [
    CommonModule,
    InventarioRoutingModule,
    SharedModule,
    ToastyModule.forRoot(),
    NgxDatatableModule,
    FormsModule
  ],
  declarations: [InventarioComponent]
})
export class InventarioModule { }
