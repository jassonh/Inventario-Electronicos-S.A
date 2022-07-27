import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

const validate = (req: Request, res: Response, next: NextFunction) => {

    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        
        console.log(errors);

        return res.status(400).json({
            msg: 'Error en la solicitud.',
            errors: errors.array()
        })
    }

    next();

}

export { validate }