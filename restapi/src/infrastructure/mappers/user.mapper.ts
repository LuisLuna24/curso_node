import { CustomError,UserEntity } from "../../domain";


export class UserMapper{
    static userEntityFromObject(object: {[key:string]: any}){
        const {id, email, role,name_user} = object;

        if(!id) throw CustomError.badRequest('Missing id user');
        if(!name_user) throw CustomError.badRequest('Missing name user');
        if(!email) throw CustomError.badRequest('Missing email user');
        if(!role) throw CustomError.badRequest('Missing role user');
        
        return new UserEntity(id, name_user, email, role);

    }
}