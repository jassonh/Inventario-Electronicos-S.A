import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrasladosAdministrarRoutingModule } from './traslados-administrar-routing.module';
import { TrasladosAdministrarComponent } from './traslados-administrar.component';
import {SharedModule} from '../../../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ToastyModule } from 'ng2-toasty';

@NgModule({
  imports: [
    CommonModule,
    TrasladosAdministrarRoutingModule,
    SharedModule,
    ToastyModule.forRoot(),
    NgxDatatableModule,
    FormsModule
  ],
  declarations: [TrasladosAdministrarComponent]
})
export class TrasladosAdministrarModule { }
