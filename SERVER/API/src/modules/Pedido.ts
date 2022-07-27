import { BaseController } from "../classes/BaseController";
import { InferSchemaType, model, Schema } from "mongoose";

const schema = new Schema({
    fecha: { type: Date, required: true },
    estado: { type: String, required: true },
}, { versionKey: false });

type TYPE = InferSchemaType<typeof schema>;

let modelo = model<TYPE>("pedidos", schema);

class PedidoModule extends BaseController<TYPE> {

    constructor() {
        super(modelo);
    }

};

export { PedidoModule };
