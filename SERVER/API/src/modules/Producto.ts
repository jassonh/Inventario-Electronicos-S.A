import { BaseController } from "../classes/BaseController";
import { InferSchemaType, model, Schema } from "mongoose";

const schema = new Schema({
    codigo_upc: { type: String, required: true },
    nombre: { type: String, required: true },
    categoria: { type: String, required: true },
    proveedor: { type: String, required: true },
    precio_costo: { type: Number, required: true },
    precio_venta: { type: Number, required: true },
}, { versionKey: false });

type TYPE = InferSchemaType<typeof schema>;

let modelo = model<TYPE>("productos", schema);

class ProductoModule extends BaseController<TYPE> {

    constructor() {
        super(modelo);
    }

};

export { ProductoModule };
