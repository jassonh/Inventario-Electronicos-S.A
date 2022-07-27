import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-basic-login',
  templateUrl: './basic-login.component.html',
  styleUrls: [
    './basic-login.component.scss',
    '../../../../../../node_modules/ng2-toasty/style-bootstrap.css',
    '../../../../../assets/icon/icofont/css/icofont.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class BasicLoginComponent implements OnInit {

  data: any = {
    email: 'app@electronicos.com',
    password: '12345'
  };

  constructor(
    private router: Router,
    private toastyService: ToastyService
  ) { }

  ngOnInit() {
    document.querySelector('body').setAttribute('themebg-pattern', 'theme6');
  }
  
  login(form: NgForm, event) {

    this.toastyService.clearAll();

    if(form.valid) {
      
      let email = form.controls.email.value;
      let password = form.controls.password.value;
      
      if(email == "app@electronicos.com" && password == "12345") {
        this.router.navigate(['/dashboard']);
      }
      else {
        this.toastyService.error({
          title: 'Error',
          msg: 'Usuario o contraseña incorrectos',
          showClose: true,
          timeout: 5000,
          theme: 'bootstrap'
        });
      }

    }
    else {
      this.toastyService.error({
        title: 'Error',
        msg: 'Por favor complete los campos requeridos',
        showClose: true,
        timeout: 5000,
        theme: 'bootstrap'
      });
    }

  }

}
