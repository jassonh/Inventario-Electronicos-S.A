import { BaseController } from "../classes/BaseController";
import { InferSchemaType, model, Schema } from "mongoose";

const schema = new Schema({
    nombre: { type: String, required: true },
}, { versionKey: false });

type TYPE = InferSchemaType<typeof schema>;

let modelo = model<TYPE>("productos_categorias", schema);

class CategoriaModule extends BaseController<TYPE> {

    constructor() {
        super(modelo);
    }

};

export { CategoriaModule };
