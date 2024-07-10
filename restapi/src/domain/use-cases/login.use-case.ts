import { JWTAdapter } from "../../config/jwt.adapter";
import { LoginUserDto } from "../dtos/auth/login-user.dto";
import { UserEntity } from "../entities/user.entity";
import { CustomError } from "../errors/custom.errors";
import { AuthRepository } from "../repositories/auth.repository";

interface UserToken{
    token: string;
    user: UserEntity;
}

interface LoginUseCase{
    execute(LoginUserDto:LoginUserDto):Promise<UserToken>;
}

type SingToken = (payload: Object,duration?:string)=>Promise<string|null>;


export class LoginUser implements LoginUseCase {
    constructor (
        private readonly authRepository: AuthRepository,
        private readonly signToken:SingToken=JWTAdapter.generateToken,
    ){}

    async execute(LoginUserDto: LoginUserDto): Promise<UserToken> {

        const user = await this.authRepository.login(LoginUserDto);

        const token = await this.signToken({email: user.email});
        if (!token) throw CustomError.internalServerError("Error generate token");

        return {
            token: token,
            user
        };
    }
}