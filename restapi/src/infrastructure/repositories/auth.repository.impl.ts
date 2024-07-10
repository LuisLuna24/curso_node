import { AuthDatasource, LoginUserDto, UserEntity, AuthRepository } from "../../domain";

export class AuthRepositoryImp implements AuthRepository {

    constructor(
        private readonly authDatasource: AuthDatasource
    ) { }
    login(LoginUserDto: LoginUserDto): Promise<UserEntity> {
        return this.authDatasource.login(LoginUserDto);
    }
}
