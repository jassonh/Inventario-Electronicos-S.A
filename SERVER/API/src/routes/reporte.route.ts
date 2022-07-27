import { Router } from 'express';
import { check } from "express-validator";
import { ReporteModule as EntityModule } from '../modules/Reporte';

import { validate } from '../utils/validate';

const router: Router = Router();

// DEFINICIÓN DE RUTAS Y VALIDACIONES

router.get('', async (req, res) => {

    const entitiy = new EntityModule();
    let data = await entitiy.all()

    res.status(200).json(data);

});

export { router }