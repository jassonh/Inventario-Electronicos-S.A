import { Router } from "express";
import { DOMAIN, PORT } from "../index";
import { check } from "express-validator";
import { ProductoModule as EntityModule} from "../modules/Producto";
import { CategoriaModule } from "../modules/Categoria";

import { validate } from "../utils/validate";

const router: Router = Router();

// DEFINICIÓN DE RUTAS Y VALIDACIONES

router.get('/', async (req, res) => {

    let index = {
        "all": `${DOMAIN}/api/producto/all`,
        "categorias": `${DOMAIN}/api/producto/categoria`,
    }
    
    res.status(200).send(index);

});

router.get('/all', async (req, res) => {

    const entitiy = new EntityModule();
    let data = await entitiy.all();

    res.status(200).json(data);

});

router.get('/categoria', async (req, res) => {

    const entitiy = new CategoriaModule();
    let data = await entitiy.all();

    res.status(200).json(data);

});

router.post('/categoria', async (req, res) => {

    const entitiy = new CategoriaModule();
    let data = entitiy.save(req.body);

    data.then(result => {
        res.status(200).json(result);
    })
    .catch(err => {
        res.status(400).json(err);
    });

});

router.get('/:id', async (req, res) => {

    res.status(200).json(
        req.params.id
    );

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

router.get('/notify', 
    check('campo_ejemplo').notEmpty().isString(),
    validate,
(req, res) => {

    res.status(200).json(
        {
            "msg": "OK"
        }
    );

});

export { router };