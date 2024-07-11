"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRepositoryImp = void 0;
class AuthRepositoryImp {
    constructor(authDatasource) {
        this.authDatasource = authDatasource;
    }
    login(LoginUserDto) {
        return this.authDatasource.login(LoginUserDto);
    }
    register(registerUserDto) {
        // Implementación de registro
        return this.authDatasource.register(registerUserDto);
    }
}
exports.AuthRepositoryImp = AuthRepositoryImp;
