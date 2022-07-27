import { connect } from "mongoose";

class DB {

    protected static connect() {
        connect("mongodb+srv://electronicos_sa:elec12345@cluster0.kmxl9.mongodb.net/inventario_electronicos_sa");
    }

}

export { DB }