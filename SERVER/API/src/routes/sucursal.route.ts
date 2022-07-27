import { Router } from 'express';
import { check } from "express-validator";
import { SucursalModule as EntityModule } from '../modules/Sucursal';

import { validate } from '../utils/validate';

const router: Router = Router();

// DEFINICIÓN DE RUTAS Y VALIDACIONES

router.get('', async (req, res) => {

    const entitiy = new EntityModule();
    let data = await entitiy.all()

    res.status(200).json(data);

});

router.post('', (req, res) => {

    const entitiy = new EntityModule();
    let data = entitiy.save(req.body);

    data.then(result => {
        res.status(200).json(result);
    })
    .catch(err => {
        res.status(400).json(err);
    });

});

export { router }