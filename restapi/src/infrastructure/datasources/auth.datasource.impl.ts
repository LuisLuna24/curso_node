import { BcryptAdapter } from "../../config/bcrypt.adapter";
import { userData } from "../../data/data";
import { AuthDatasource, CustomError, LoginUserDto, UserEntity } from "../../domain";
import { RegisterUserDto } from "../../domain/dtos/auth/register-user.dto";
import { UserMapper } from "../mappers/user.mapper";

type HashFunction = (password: string)=>string;
type CompareFunction= (passwor:string, hashed:string)=>boolean;

export class AuthDatasourceImpl implements AuthDatasource {

    constructor(
        private readonly hashPassword: HashFunction = BcryptAdapter.hash,
        private readonly compareFunction : CompareFunction = BcryptAdapter.compare, 
    ){}
    async register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
        
        const { name_user, email, password, role } = registerUserDto;
        //console.log(RegisterUserDto);

        const exixtUser = userData.find(user=>user.email===email);
        if(exixtUser) throw CustomError.badRequest("Email already registered");
        const newUser = {
            id: new Date().getTime(),
            name_user,
            email,
            password: this.hashPassword(password),
            role
        }
        userData.push(newUser);
        
        return UserMapper.userEntityFromObject(newUser); //
    }
    async login(loginUserDto: LoginUserDto): Promise<UserEntity> {

        const { email, password } = loginUserDto;
        const user = userData.find(user => user.email === email && user.password === password);
        if (!user) throw CustomError.badRequest('User not found');

        return UserMapper.userEntityFromObject(user);
    }

    //REgistro de usuarios


}