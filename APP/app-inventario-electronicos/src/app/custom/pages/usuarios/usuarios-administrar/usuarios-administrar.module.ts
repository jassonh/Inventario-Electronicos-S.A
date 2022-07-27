import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosAdministrarRoutingModule } from './usuarios-administrar-routing.module';
import { UsuariosAdministrarComponent } from './usuarios-administrar.component';
import {SharedModule} from '../../../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ToastyModule } from 'ng2-toasty';

@NgModule({
  imports: [
    CommonModule,
    UsuariosAdministrarRoutingModule,
    SharedModule,
    ToastyModule.forRoot(),
    NgxDatatableModule,
    FormsModule
  ],
  declarations: [UsuariosAdministrarComponent]
})
export class UsuariosAdministrarModule { }
