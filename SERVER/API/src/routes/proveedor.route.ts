import { Router } from "express";
import { check } from "express-validator";
import { ProveedoreModule as EntityModule} from "../modules/Proveedor";

import { validate } from "../utils/validate";

const router: Router = Router();


// DEFINICIÓN DE RUTAS Y VALIDACIONES

router.get('', async (req, res) => {

    const entity = new EntityModule();
    let data = await entity.all();

    res.status(200).json(data);

});

router.post('', async (req, res) => {

    const entity = new EntityModule();
    let data = await entity.save(req.body);

    res.status(200).json(data);

});

export { router };