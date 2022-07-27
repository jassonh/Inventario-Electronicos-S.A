import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosCategoriasRoutingModule } from './productos-categorias-routing.module';
import { ProductosCategoriasComponent } from './productos-categorias.component';
import {SharedModule} from '../../../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ToastyModule } from 'ng2-toasty';

@NgModule({
  imports: [
    CommonModule,
    ProductosCategoriasRoutingModule,
    SharedModule,
    ToastyModule.forRoot(),
    NgxDatatableModule,
    FormsModule
  ],
  declarations: [ProductosCategoriasComponent]
})
export class ProductosCategoriasModule { }
