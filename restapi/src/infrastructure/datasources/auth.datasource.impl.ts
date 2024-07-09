import { AuthDatasource } from "../../domain/datasource/auth.datasource";
import { LoginUserDto } from "../../domain/dtos/auth/login-user.dto";
import { UserEntity } from "../../domain/entities/user.entity";

export class AuthDatasourceImpl implements AuthDatasource {
    login(LoginUserDto: LoginUserDto): Promise<UserEntity> {
        throw new Error("Method not implemented.");
    }
}