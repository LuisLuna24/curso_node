"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = exports.StatusRole = void 0;
const custom_errors_1 = require("../errors/custom.errors");
var StatusRole;
(function (StatusRole) {
    StatusRole["admin"] = "admin_role";
    StatusRole["user"] = "user_role";
})(StatusRole || (exports.StatusRole = StatusRole = {}));
class UserEntity {
    constructor(id, name, email, role) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role;
    }
    static fromObject(object) {
        const { id, name, email, role } = object;
        if (!id)
            throw custom_errors_1.CustomError.badRequest('Missing id user');
        if (!name)
            throw custom_errors_1.CustomError.badRequest('Missing name user');
        if (!email)
            throw custom_errors_1.CustomError.badRequest('Missing email user');
        if (!role)
            throw custom_errors_1.CustomError.badRequest('Missing role user');
        return new UserEntity(id, name, email, role);
    }
}
exports.UserEntity = UserEntity;
