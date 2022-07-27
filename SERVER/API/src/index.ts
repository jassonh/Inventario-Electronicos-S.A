import express from "express";
import cors from "cors";
import path from "path";

// IMPORT MODULES
import { router as clienteRouter } from "./routes/cliente.route";
import { router as ventaRouter } from "./routes/venta.route";
import { router as productoRouter } from "./routes/producto.route";
import { router as proveedorRouter } from "./routes/proveedor.route";
import { router as usuarioRouter } from "./routes/usuario.route";
import { router as rolRouter } from "./routes/rol.route";
import { router as permisoRouter } from "./routes/permiso.route";
import { router as ingresoRouter } from "./routes/ingreso.route";
import { router as trasladoRouter } from "./routes/traslado.route";
import { router as sucursalRouter } from "./routes/sucursal.route";
import { router as pedidoRouter } from "./routes/pedido.route";
import { router as reporteRouter } from "./routes/pedido.route";

const PRODUCTION = process.env.NODE_ENV === "production";
const DOMAIN_PROD = "https://app-electronicos-sa.herokuapp.com"
const DOMAIN_DEV = "http://localhost"

// DOMAIN & PORT
const PORT = PRODUCTION ? process.env.PORT : 3001;
const DOMAIN = PRODUCTION ? DOMAIN_PROD : `${DOMAIN_DEV}:${PORT}`;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const appPath = path.join(__dirname, '../../../APP/app-inventario-electronicos/dist/');
app.use(express.static(appPath))

// ROUTES
app.use('/api/cliente', clienteRouter);
app.use('/api/venta', ventaRouter);
app.use('/api/producto', productoRouter);
app.use('/api/proveedor', proveedorRouter);
app.use('/api/usuario', usuarioRouter);
app.use('/api/rol', rolRouter);
app.use('/api/permiso', permisoRouter);
app.use('/api/ingreso', ingresoRouter);
app.use('/api/traslado', trasladoRouter);
app.use('/api/sucursal', sucursalRouter);
app.use('/api/pedido', pedidoRouter);
app.use('/api/reporte', reporteRouter);

// API
app.route("/api")
.get((req, res) => {

    let index = {
        "clientes": `${DOMAIN}/api/cliente`,
        "ventas": `${DOMAIN}/api/venta`,
        "productos": `${DOMAIN}/api/producto`,
        "proveedores": `${DOMAIN}/api/proveedor`,
        "usuarios": `${DOMAIN}/api/usuario`,
        "roles": `${DOMAIN}/api/rol`,
        "permisos": `${DOMAIN}/api/permiso`,
        "ingresos": `${DOMAIN}/api/ingreso`,
        "traslados": `${DOMAIN}/api/traslado`,
        "sucursales": `${DOMAIN}/api/sucursal`,
        "pedidos": `${DOMAIN}/api/pedido`,
        "reportes": `${DOMAIN}/api/reporte`,
    }

    res.status(200).send(index);
    
});

// APP
app.get('/*', function(req, res) {
    console.log(__dirname);
    res.sendFile("index.html", { root: appPath });
});

// LISTEN
app.listen(PORT, () => {
    console.log(`APP is running on: ${DOMAIN}/`);
    console.log(`API is running on: ${DOMAIN}/api`);
});

export { app, PORT, DOMAIN };