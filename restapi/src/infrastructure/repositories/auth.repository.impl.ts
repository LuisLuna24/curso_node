import { AuthDatasource, RegisterUserDto, LoginUserDto, UserEntity, AuthRepository } from "../../domain";

export class AuthRepositoryImp implements AuthRepository {

    constructor(
        private readonly authDatasource: AuthDatasource
    ) { }
    register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
        //throw new Error("Method not implemented.");
        return this.authDatasource.register(registerUserDto);

    }
    
    login(LoginUserDto: LoginUserDto): Promise<UserEntity> {
        return this.authDatasource.login(LoginUserDto);
    }

    
}
