import { StatusRole } from "../../entities/user.entity";

export class RegisterUserDto {
    constructor(
        public readonly name_user: string, 
        public readonly email: string,
        public readonly password: string,
        public readonly role:StatusRole = StatusRole.user
    ) { }

    static create(object: { [key: string]: any }): [string?, RegisterUserDto?] {
        const{email,password,name_user,role}= object;

        let roleUser:StatusRole = role;
        if(!roleUser){
            roleUser = StatusRole.user;
        }
        if(!email) return ['Missing email'];
        if(!password) return ['Missing password'];
        if(!name_user) return ['Missing name_user user'];
        return [undefined, new RegisterUserDto(name_user,email,password,roleUser)];
    }
}