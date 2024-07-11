"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
const auth_datasource_impl_1 = require("../../infrastructure/datasources/auth.datasource.impl");
const auth_repository_impl_1 = require("../../infrastructure/repositories/auth.repository.impl");
class AuthRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const datasource = new auth_datasource_impl_1.AuthDatasourceImpl();
        const repository = new auth_repository_impl_1.AuthRepositoryImp(datasource);
        const contrller = new controller_1.AuthController(repository);
        //^GET - Obtener informacion
        //^POST -Mandar informacion
        //^PUT - Modificar informacion
        //^DELETE - Eliminar informacion
        //&Login -
        router.post('/login', contrller.loginUser);
        //&Reniu -
        router.get('/renew', contrller.renewUser);
        //&Register -
        router.post('/register', contrller.registerUser);
        return router;
    }
}
exports.AuthRoutes = AuthRoutes;
