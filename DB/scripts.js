
db.createCollection('productos', { validator: { $jsonSchema: { bsonType: 'object', description: 'Each Product would have its own document, which would contain an array of ObjectID references to Parts.', title: 'productos', required: ['nombre', 'categoria', 'proveedor'], properties: { codigo_upc: { bsonType: 'string' }, nombre: { bsonType: 'string' }, categoria: { bsonType: 'objectId' }, proveedor: { bsonType: 'objectId' }, precio_costo: { bsonType: 'decimal' }, precio_venta: { bsonType: 'decimal' } } } } });
db.createCollection('sucursales', {
    validator: {
        $jsonSchema: {
            bsonType: 'object', title: 'sucursales', required: ['clientes', 'ingresos'], properties: {
                nombre: { bsonType: 'string' }, direccion: { bsonType: 'string' }, telefono: { bsonType: 'string' }, clientes: { bsonType: 'array', items: { bsonType: 'objectId' } }, ingresos: { bsonType: 'objectId' }, existencias: {
                    bsonType: 'array', items: {
                        title: 'existencia', required: ['producto'], properties: { producto: { bsonType: 'objectId' }, cantidad: { bsonType: 'int' } }
                    }
                }
            }
        }
    }
});
db.createCollection('clientes', { validator: { $jsonSchema: { bsonType: 'object', title: 'clientes', properties: { nombre: { bsonType: 'string' }, nit: { bsonType: 'string' }, email: { bsonType: 'string' } } } } });
db.createCollection('proveedores', { validator: { $jsonSchema: { bsonType: 'object', title: 'proveedores', properties: { nit: { bsonType: 'string' }, nombre: { bsonType: 'string' }, telefono: { bsonType: 'string' }, direccion: { bsonType: 'string' }, email: { bsonType: 'string' } } } } });
db.createCollection('ingresos', {
    validator: {
        $jsonSchema: {
            bsonType: 'object', title: 'ingresos', required: ['sucursal'], properties: {
                sucursal: { bsonType: 'objectId' }, detalle: {
                    bsonType: 'array', items: {
                        title: 'ingreso_detalle', required: ['productos'], properties: {
                            productos: {
                                bsonType: 'array', items: {
                                    title: 'ingreso_producto', required: ['producto'], properties: { producto: { bsonType: 'objectId' }, cantidad: { bsonType: 'int' } }
                                }
                            }
                        }
                    }
                }, fecha: { bsonType: 'date' }
            }
        }
    }
});
db.createCollection('traslados', {
    validator: {
        $jsonSchema: {
            bsonType: 'object', title: 'traslados', required: ['sucursal_desde', 'sucursales_hasta'], properties: {
                sucursal_desde: { bsonType: 'objectId' }, sucursales_hasta: { bsonType: 'objectId' }, fecha: { bsonType: 'date' }, detalle: {
                    bsonType: 'array', items: {
                        title: 'traslado_detalle', required: ['productos'], properties: {
                            productos: {
                                bsonType: 'array', items: {
                                    title: 'traslado_producto', required: ['producto'], properties: { producto: { bsonType: 'objectId' }, cantidad: { bsonType: 'int' } }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
});
db.createCollection('pedido', {
    validator: {
        $jsonSchema: {
            bsonType: 'object', title: 'pedido', properties: {
                fecha: { bsonType: 'date' }, estado: { bsonType: 'string' }, detalle: {
                    bsonType: 'array', items: {
                        title: 'pedido_detalle', required: ['productos'], properties: {
                            productos: {
                                bsonType: 'array', items: {
                                    title: 'pedido_producto', required: ['producto'], properties: { producto: { bsonType: 'objectId' }, cantidad: { bsonType: 'int' } }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
});
db.createCollection('venta', { validator: { $jsonSchema: { bsonType: 'object', title: 'venta', required: ['cliente'], properties: { cliente: { bsonType: 'objectId' }, total: { bsonType: 'decimal' } } } } });
db.createCollection('productos_categorias', { validator: { $jsonSchema: { bsonType: 'object', title: 'productos_categorias', required: ['nombre'], properties: { nombre: { bsonType: 'string' } } } } });
db.createCollection('usuarios', { validator: { $jsonSchema: { bsonType: 'object', title: 'usuarios', required: ['rol'], properties: { nombre: { bsonType: 'string' }, usuario: { bsonType: 'string' }, password: { bsonType: 'string' }, rol: { bsonType: 'objectId' } } } } });
db.createCollection('roles', {
    validator: {
        $jsonSchema: {
            bsonType: 'object', title: 'roles', properties: {
                nombre: { bsonType: 'string' }, permisos: {
                    bsonType: 'array', items: {
                        title: 'permiso', properties: { nombre: { bsonType: 'string' } }
                    }
                }
            }
        }
    }
});  