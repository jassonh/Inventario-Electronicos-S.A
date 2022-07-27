import { BaseController } from "../classes/BaseController";
import { InferSchemaType, model, Schema } from "mongoose";

const schema = new Schema({
    nombre: { type: String, required: true },
    nit: { type: String, required: true },
    email: { type: String, required: true },
}, { versionKey: false });

type TYPE = InferSchemaType<typeof schema>;

let modelo = model<TYPE>("clientes", schema);

class ClienteModule extends BaseController<TYPE> {

    constructor() {
        super(modelo);
    }

};

export { ClienteModule };
