import { BaseController } from "../classes/BaseController";
import { InferSchemaType, model, Schema } from "mongoose";

const schema = new Schema({
    sucursal: { type: String, required: true },
    fecha: { type: Date, required: true },
}, { versionKey: false });

type TYPE = InferSchemaType<typeof schema>;

let modelo = model<TYPE>("ingresos", schema);

class IngresoModule extends BaseController<TYPE> {

    constructor() {
        super(modelo);
    }

};

export { IngresoModule };
