import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { ToastyService } from 'ng2-toasty';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-ingresos-administrar',
  templateUrl: './ingresos-administrar.component.html',
  styleUrls: [
    './ingresos-administrar.component.scss',
    '../../../../../../node_modules/ng2-toasty/style-bootstrap.css',
    '../../../../../assets/icon/icofont/css/icofont.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class IngresosAdministrarComponent implements OnInit {

  data: any = {};

  columns = [
    { name: 'Sucursal', prop: 'sucursal' },
    { name: 'Fecha', prop: 'fecha' },
  ];

  loadingIndicator = true;
  
  rowsBasic = [];
  tempRows = [];

  @ViewChild(DatatableComponent) table: DatatableComponent;

  constructor(private toastyService: ToastyService) { }

  ngOnInit() {
    this.find();
  }

  find() {

    this.loadingIndicator = true;
    
    let result = fetch(`${environment.apiUrl}/ingreso`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    result.then(async res => {
      let data = await res.json();
      this.rowsBasic = data;
      this.tempRows = data;
      this.loadingIndicator = false;
    });
        
  }

  save(form: NgForm, event) {

    event.preventDefault();
    this.toastyService.clearAll();

    if(form.valid) {

      this.data.estado = 'PENDIENTE';

      let result = fetch(`${environment.apiUrl}/ingreso`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.data)
      });

      result.then(async res => {
        if(res.ok) {
          this.toastyService.success({
            title: 'Creado',
            msg: 'Se ha agregado correctamente',
            showClose: true,
            timeout: 5000,
            theme: 'bootstrap',
          });
          form.reset();
          this.find();
        }
        else {
          this.toastyService.error({
            title: 'Error',
            msg: 'Ha ocurrido un error al agregar',
            showClose: true,
            timeout: 5000,
            theme: 'bootstrap'
          });
        }
      })
      .catch(err => {
        this.toastyService.error({
          title: 'Error',
          msg: 'Ha ocurrido un error de comunicación con el servidor',
          showClose: true,
          timeout: 5000,
          theme: 'bootstrap'
        });
      });

    }
    else {
      this.toastyService.error({
        title: 'Error',
        msg: 'Complete todos los campos y/o corrija los campos en rojo',
        showClose: true,
        timeout: 5000,
        theme: 'bootstrap'
      });
    }

  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.tempRows.filter(function(d) {
      return d.nombre.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rowsBasic = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }


}
