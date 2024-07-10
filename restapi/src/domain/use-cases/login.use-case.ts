import { LoginUserDto } from "../dtos/auth/login-user.dto";
import { UserEntity } from "../entities/user.entity";
import { AuthRepository } from "../repositories/auth.repository";

interface UserToken{
    token: string;
    user: UserEntity;
}

interface LoginUseCase{
    execute(LoginUserDto:LoginUserDto):Promise<UserToken>;
}

export class LoginUser implements LoginUseCase {
    constructor (
        private readonly authRepository: AuthRepository,
    ){}

    async execute(LoginUserDto: LoginUserDto): Promise<UserToken> {
        
        const user = await this.authRepository.login(LoginUserDto);

        return {
            token: '123123123',
            user
        };
    }
}