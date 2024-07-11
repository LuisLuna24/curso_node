"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthDatasourceImpl = void 0;
const data_1 = require("../../data/data");
const domain_1 = require("../../domain");
const user_mapper_1 = require("../mappers/user.mapper");
class AuthDatasourceImpl {
    login(loginUserDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = loginUserDto;
            const user = data_1.userData.find(user => user.email === email && user.password === password);
            if (!user)
                throw domain_1.CustomError.badRequest('User not found');
            return user_mapper_1.UserMapper.userEntityFromObject(user);
        });
    }
    //registro de usuarios 
    register(registerUserDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name_user, email, password, role } = registerUserDto;
            const user = data_1.userData.find(user => user.email === email && user.password === password && user.name_user === name_user && user.role === role);
            if (!user)
                throw domain_1.CustomError.badRequest('User not found');
            return user_mapper_1.UserMapper.userEntityFromObject(user);
        });
    }
}
exports.AuthDatasourceImpl = AuthDatasourceImpl;
