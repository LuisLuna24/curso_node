import { Request, Response, Router } from "express";

export class AuthRoutes {
    static get routes(): Router {
        const router = Router();

        //^GET - Obtener informacion
        //^POST -Mandar informacion
        //^PUT - Modificar informacion
        //^DELETE - Eliminar informacion

        //&Login -
        router.post('/login', (req: Request, res: Response) => {
            res.json({
                msg:'Usuario Registrado Correctamente'
            });
        })

        //&Reniu -
        router.get('/renew', (req: Request, res: Response) => {
            res.json({
                msg:'Usuario renovado correctamente'
            });
        })

        //&Register -
        router.post('/register', (req: Request, res: Response) => {
            res.json({
               
            });
        })

        

        return router;
    }
}