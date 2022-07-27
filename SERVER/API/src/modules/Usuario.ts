import { BaseController } from "../classes/BaseController";
import { InferSchemaType, model, Schema } from "mongoose";

const schema = new Schema({
    nombre: { type: String, required: true },
    usuario: { type: String, required: true },
    password: { type: String, required: true },
    rol: { type: String, required: true },
    email: { type: String, required: true },
}, { versionKey: false });

type TYPE = InferSchemaType<typeof schema>;

let modelo = model<TYPE>("usuarios", schema);

class UsuarioModule extends BaseController<TYPE> {

    constructor() {
        super(modelo);
    }

};

export { UsuarioModule };
