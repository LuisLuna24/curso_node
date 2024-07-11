"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterUserDto = void 0;
class RegisterUserDto {
    constructor(name_user, email, password, role) {
        this.name_user = name_user;
        this.email = email;
        this.password = password;
        this.role = role;
    }
    static create(object) {
        const { email, password, name_user, role } = object;
        if (!email)
            return ['Missing email'];
        if (!password)
            return ['Missing password'];
        if (!name_user)
            return ['Missing name user'];
        if (!role)
            return ['Missing role'];
        return [undefined, new RegisterUserDto(name_user, email, password, role)];
    }
}
exports.RegisterUserDto = RegisterUserDto;
