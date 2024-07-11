"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMapper = void 0;
const domain_1 = require("../../domain");
class UserMapper {
    static userEntityFromObject(object) {
        const { id, email, role, name_user } = object;
        if (!id)
            throw domain_1.CustomError.badRequest('Missing id user');
        if (!name_user)
            throw domain_1.CustomError.badRequest('Missing name user');
        if (!email)
            throw domain_1.CustomError.badRequest('Missing email user');
        if (!role)
            throw domain_1.CustomError.badRequest('Missing role user');
        return new domain_1.UserEntity(id, name_user, email, role);
    }
}
exports.UserMapper = UserMapper;
