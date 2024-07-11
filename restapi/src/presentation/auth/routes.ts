import { Request, Response, Router } from "express";
import { AuthController } from "./controller";
import { AuthDatasourceImpl } from "../../infrastructure/datasources/auth.datasource.impl";
import { AuthRepositoryImp } from "../../infrastructure/repositories/auth.repository.impl";
import { AuthMiddleware } from "../middlewares/auth.middleware";

export class AuthRoutes {
    static get routes(): Router {
        const router = Router();
        const datasource = new AuthDatasourceImpl();
        const repository = new AuthRepositoryImp(datasource);
        const contrller = new AuthController(repository);


        //^GET - Obtener informacion
        //^POST -Mandar informacion
        //^PUT - Modificar informacion
        //^DELETE - Eliminar informacion

        //&Login -
        router.post('/login', contrller.loginUser);

        //&Reniu -
        router.get('/renew',[AuthMiddleware.ValidateJTW], contrller.renewUser);

        //&Register -
        router.post('/register' ,contrller.registerUser);

        return router;
    }
}