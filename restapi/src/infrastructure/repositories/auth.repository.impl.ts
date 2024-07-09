import { AuthDatasource } from "../../domain/datasource/auth.datasource";
import { LoginUserDto } from "../../domain/dtos/auth/login-user.dto";
import { UserEntity } from "../../domain/entities/user.entity";
import { AuthRepository } from "../../domain/repositories/auth.repository"

export class AuthRepositoryImp implements AuthRepository{

    constructor(
        private readonly authDatasource: AuthDatasource
    ){}
    login(LoginUserDto: LoginUserDto): Promise<UserEntity> {
        return this.authDatasource.login(LoginUserDto);
    }
}
    