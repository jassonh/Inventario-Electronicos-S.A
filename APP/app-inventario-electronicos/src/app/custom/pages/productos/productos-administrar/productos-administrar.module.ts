import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosAdministrarRoutingModule } from './productos-administrar-routing.module';
import { ProductosAdministrarComponent } from './productos-administrar.component';
import {SharedModule} from '../../../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ToastyModule } from 'ng2-toasty';

@NgModule({
  imports: [
    CommonModule,
    ProductosAdministrarRoutingModule,
    SharedModule,
    ToastyModule.forRoot(),
    NgxDatatableModule,
    FormsModule
  ],
  declarations: [ProductosAdministrarComponent]
})
export class ProductosAdministrarModule { }
