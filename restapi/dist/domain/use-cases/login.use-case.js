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
exports.LoginUser = void 0;
const jwt_adapter_1 = require("../../config/jwt.adapter");
const custom_errors_1 = require("../errors/custom.errors");
class LoginUser {
    constructor(authRepository, signToken = jwt_adapter_1.JWTAdapter.generateToken) {
        this.authRepository = authRepository;
        this.signToken = signToken;
    }
    execute(LoginUserDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.authRepository.login(LoginUserDto);
            const token = yield this.signToken({ email: user.email });
            if (!token)
                throw custom_errors_1.CustomError.internalServerError("Error generate token");
            return {
                token: token,
                user
            };
        });
    }
}
exports.LoginUser = LoginUser;
