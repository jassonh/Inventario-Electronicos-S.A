import { BaseController } from "../classes/BaseController";
import { InferSchemaType, model, Schema } from "mongoose";

const schema = new Schema({
    sucursal_desde: { type: String, required: true },
    sucursal_hasta: { type: String, required: true },
    fecha: { type: Date, required: true },
}, { versionKey: false });

type TYPE = InferSchemaType<typeof schema>;

let modelo = model<TYPE>("traslados", schema);

class TrasladoModule extends BaseController<TYPE> {

    constructor() {
        super(modelo);
    }

};

export { TrasladoModule };
