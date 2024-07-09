import { Response } from "express";
import { CustomError } from "../../domain";

export class AuthController {
    constructor() {
        //todo: Controlador de dependencias
    }

    private handleError = (error: unknown, res: Response) => {
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({
                message: error.message
            });
        }

        return res.status(500).json({
            error: 'Internal Server Error'
        });
    }

    /*loginUser = async(req: Request, res: Response) => {
        res.json({
            msg: 'Usuario logeado Correctamente'
        });
    }*/
}