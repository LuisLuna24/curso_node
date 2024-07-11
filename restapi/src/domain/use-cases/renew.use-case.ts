import { JWTAdapter } from "../../config/jwt.adapter";
import { UserEntity } from "../entities/user.entity";
import { CustomError } from "../errors/custom.errors";

interface UserToken {
    token: string;
    user: UserEntity;
}


type SingToken = (payload: Object, duration?: string) => Promise<string | null>;

interface ReniwUseCase{
    execute(user: UserEntity): Promise<UserToken>;
}

export class RenewUser implements ReniwUseCase{

    constructor(
        private readonly signToken: SingToken=JWTAdapter.generateToken,
    ){}
    async execute(user: UserEntity): Promise<UserToken> {
        
        const token = await this.signToken({email: user.email});

        if(!token) throw CustomError.internalServerError('Error Token');

        return {
            token: token,
            user
        };
    }

}