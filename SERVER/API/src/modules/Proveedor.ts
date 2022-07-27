import { BaseController } from "../classes/BaseController";
import { InferSchemaType, model, Schema } from "mongoose";

const schema = new Schema({
    nombre: { type: String, required: true },
    nit: { type: String, required: true },
    email: { type: String, required: true },
    telefono: { type: String, required: true },
    direccion: { type: String, required: true },
}, { versionKey: false });

type TYPE = InferSchemaType<typeof schema>;

let modelo = model<TYPE>("proveedores", schema);

class ProveedoreModule extends BaseController<TYPE> {

    constructor() {
        super(modelo);
    }

};

export { ProveedoreModule };
