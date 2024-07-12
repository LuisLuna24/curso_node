import { BcryptAdapter } from "../../config/bcrypt.adapter";
import { userData } from "../../data/data";
import { prisma } from "../../data/postgres/config";
import { AuthDBDatasource, CustomError, LoginUserDto, UserEntity } from "../../domain";
import { RegisterUserDto } from "../../domain/dtos/auth/register-user.dto";
import { UserMapper } from "../mappers/user.mapper";

type HashFunction = (password: string) => string;
type CompareFunction = (passwor: string, hashed: string) => boolean;

export class AuthDBDatasourceImpl implements AuthDBDatasource {

    constructor(
        private readonly hashPassword: HashFunction = BcryptAdapter.hash,
        private readonly compareFunction: CompareFunction = BcryptAdapter.compare,
    ) { }
    async register(registerUserDto: RegisterUserDto): Promise<UserEntity> {

        const { name_user, email, password, role } = registerUserDto;
        //console.log(RegisterUserDto);

        try {
            const existUser = await prisma.users.findFirst({
                where: {
                    email: email,
                }
            });

            if (existUser) throw CustomError.badRequest('Email exist');

            registerUserDto.password = this.hashPassword(registerUserDto.password);

            const newUser = {
                id: new Date().getTime(),
                name_user,
                email,
                password: this.hashPassword(password),
                role
            }
            userData.push(newUser);

            return UserMapper.userEntityFromObject(newUser); //


        } catch (err) {
            console.error('Error:', err);
            throw CustomError.internalServerError();
        }


    }
    async login(loginUserDto: LoginUserDto): Promise<UserEntity> {

        const { email, password } = loginUserDto;
        
        try {
            const user = await prisma.users.findFirst({
                where:{
                    email : email
                }
            })

            if(!user) throw CustomError.badRequest('User not exist');

            const isMatching = this.compareFunction(password, user.password);

            if(!isMatching) throw CustomError.badRequest('An error ocurred while satrt session');

            return UserMapper.userEntityFromObject(user);

        } catch (error) {

            console.log(error);
            if(error instanceof CustomError){
                throw error;
            }
            
            throw CustomError.internalServerError();
        }


        
    }

    //REgistro de usuarios
}