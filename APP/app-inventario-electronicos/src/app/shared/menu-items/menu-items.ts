import {Injectable} from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  short_label?: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [
  {
    label: 'Menú',
    main: [
      {
        state: 'dashboard',
        short_label: 'D',
        name: 'Dashboard',
        type: 'link',
        icon: 'feather icon-home',
      },
      {
        state: 'clientes',
        short_label: 'C',
        name: 'Clientes',
        type: 'sub',
        icon: 'feather icon-users',
        children: [
          {
            state: 'administrar',
            name: 'Administrar Clientes'
          },
        ]
      },
      {
        state: 'proveedores',
        short_label: 'P',
        name: 'Proveedores',
        type: 'sub',
        icon: 'feather icon-home',
        children: [
          {
            state: 'administrar',
            name: 'Administrar Proveedores'
          },
        ]
      },
      {
        state: 'productos',
        short_label: 'P',
        name: 'Productos',
        type: 'sub',
        icon: 'feather icon-shopping-cart',
        children: [
          {
            state: 'administrar',
            name: 'Administrar Productos'
          },
          {
            state: 'categorias  ',
            name: 'Categorias'
          },
          {
            state: 'inventario',
            name: 'Inventario'
          },
        ]
      },
      {
        state: 'ventas',
        short_label: 'V',
        name: 'Ventas',
        type: 'sub',
        icon: 'feather icon-credit-card',
        children: [
          {
            state: 'administrar',
            name: 'Administrar Ventas'
          },
        ]
      },
      {
        state: 'sucursales',
        short_label: 'S',
        name: 'Sucursales',
        type: 'sub',
        icon: 'feather icon-home',
        children: [
          {
            state: 'administrar',
            name: 'Administrar Sucursales'
          },
        ]
      },
      {
        state: 'traslados',
        short_label: 'S',
        name: 'Traslados',
        type: 'sub',
        icon: 'feather icon-navigation',
        children: [
          {
            state: 'administrar',
            name: 'Administrar Traslados'
          },
        ]
      },
      {
        state: 'ingresos',
        short_label: 'I',
        name: 'Ingresos',
        type: 'sub',
        icon: 'feather icon-plus',
        children: [
          {
            state: 'administrar',
            name: 'Administrar Ingresos'
          },
        ]
      },
      {
        state: 'pedidos',
        short_label: 'P',
        name: 'Pedidos',
        type: 'sub',
        icon: 'feather icon-calendar',
        children: [
          {
            state: 'administrar',
            name: 'Administrar Pedidos'
          },
        ]
      },
      {
        state: 'reportes',
        short_label: 'P',
        name: 'Reportes',
        type: 'sub',
        icon: 'feather icon-file-text',
        children: [
          {
            state: 'reporte1',
            name: 'Existencia de productos en bodega central'
          },
          {
            state: 'reporte2',
            name: 'Ingresos por proveedor'
          },
          {
            state: 'reporte3',
            name: 'Proveedores con más pedidos'
          },
          {
            state: 'reporte4',
            name: 'Existencia de productos por sucursal'
          },
          {
            state: 'reporte5',
            name: 'Datos de proveedores'
          },
          {
            state: 'reporte6',
            name: 'Datos de sucursales'
          }
        ]
      },
      {
        state: 'usuarios',
        short_label: 'U',
        name: 'Usuarios',
        type: 'sub',
        icon: 'feather icon-user',
        children: [
          {
            state: 'administrar',
            name: 'Administrar Usuarios'
          },
          {
            state: 'roles',
            name: 'Roles'
          },
        ]
      },
    ],
  },
];


@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }
}
