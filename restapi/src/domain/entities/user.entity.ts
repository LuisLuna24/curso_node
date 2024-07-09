import { CustomError } from "../errors/custom.errors"

export enum StatusRole{
    admin = "admin_role",
    user = "user_role"
}

export class UserEntity {
    constructor(
        public id: number,
        public readonly name: string,
        public readonly email: string,
        public readonly role: StatusRole,
    ){}

    static fromObject(object: {[key: string]: any}){
        const {id, name, email, role} = object

        if(!id) throw CustomError.badRequest('Missing id user');
        if(!name) throw CustomError.badRequest('Missing name user');
        if(!email) throw CustomError.badRequest('Missing email user');
        if(!role) throw CustomError.badRequest('Missing role user');

        return new UserEntity(id, name, email, role);
    }
}