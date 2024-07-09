import { Request, Response, Router } from "express";
import { AuthController } from "./controller";

export class AuthRoutes {
    static get routes(): Router {
        const router = Router();
        const contrller = new AuthController();


        //^GET - Obtener informacion
        //^POST -Mandar informacion
        //^PUT - Modificar informacion
        //^DELETE - Eliminar informacion

        //&Login -
        router.post('/login',(req: Request, res: Response) => {
            res.json({
                msg: 'Usuario logeado Correctamente'
            });
        })

        //&Reniu -
        router.get('/renew', (req: Request, res: Response) => {
            res.json({
                msg:'Usuario renovado'
            });
        })

        //&Register -
        router.post('/register', (req: Request, res: Response) => {
            res.json({
                msg:'Usuario registrado'
            });
        })

        

        return router;
    }
}