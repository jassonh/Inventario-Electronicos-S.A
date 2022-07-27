import { BaseController } from "../classes/BaseController";
import { InferSchemaType, model, Schema } from "mongoose";

const schema = new Schema({
    fecha: { type: Date, required: true },
    cliente: { type: String, required: true },
    total: { type: Number, required: true },
}, { versionKey: false });

type TYPE = InferSchemaType<typeof schema>;

let modelo = model<TYPE>("ventas", schema);
  
class VentaModule extends BaseController<TYPE> {

    constructor() {
        super(modelo);
    }

}

export { VentaModule };
