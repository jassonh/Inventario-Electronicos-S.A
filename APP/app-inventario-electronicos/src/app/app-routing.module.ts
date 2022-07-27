import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './layout/admin/admin.component';
import {AuthComponent} from './layout/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        loadChildren: './theme/auth/login/basic-login/basic-login.module#BasicLoginModule'
      }
    ]
  },
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'usuario',
        loadChildren: './theme/user/user.module#UserModule'
      },
      {
        path: 'dashboard',
        loadChildren: './theme/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'clientes',
        loadChildren: './custom/pages/clientes/clientes.module#ClientesModule'
      },
      {
        path: 'productos',
        loadChildren: './custom/pages/productos/productos.module#ProductosModule'
      },
      {
        path: 'proveedores',
        loadChildren: './custom/pages/proveedores/proveedores.module#ProveedoresModule'
      },
      {
        path: 'ventas',
        loadChildren: './custom/pages/ventas/ventas.module#VentasModule'
      },
      {
        path: 'sucursales',
        loadChildren: './custom/pages/sucursales/sucursales.module#SucursalesModule'
      },
      {
        path: 'traslados',
        loadChildren: './custom/pages/traslados/traslados.module#TrasladosModule'
      },
      {
        path: 'ingresos',
        loadChildren: './custom/pages/ingresos/ingresos.module#IngresosModule'
      },
      {
        path: 'pedidos',
        loadChildren: './custom/pages/pedidos/pedidos.module#PedidosModule'
      },
      {
        path: 'usuarios',
        loadChildren: './custom/pages/usuarios/usuarios.module#UsuariosModule'
      },
      {
        path: 'reportes',
        loadChildren: './custom/pages/reportes/reportes.module#ReportesModule'
      }
    ]
  },
  {
    path: '**',
    loadChildren: './theme/maintenance/error/error-404/error-404.module#Error404Module'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
