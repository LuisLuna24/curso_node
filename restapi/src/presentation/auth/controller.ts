import { Response,Request } from "express";
import { CustomError, LoginUserDto, LoginUser, AuthRepository } from "../../domain";


export class AuthController {
    constructor(
        private readonly authRepository: AuthRepository,
    ) {
        //todo: Controlador de dependencias
        
    }

    private handleError = (error: unknown, res: Response) => {
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({
                message: error.message
            });
        }

        return res.status(500).json({
            error: 'Internal Server Error'
        });
    }

    loginUser = async(req: Request, res: Response) => {

        const [error,loginUserDto] = LoginUserDto.create(req.body);

        if(error) return res.status(400).json({ error });
        console.log(loginUserDto);

        /*res.json({
            msg: error
        });*/
        new LoginUser(this.authRepository)
            .execute(loginUserDto!)
            .then(data => res.json(data))
            .catch(error =>this.handleError(error, res));
    }

    renewUser= async(req: Request, res: Response) => {
        res.json({
            msg:'Usuario renovado'
        });
    }

    registerUser= async(req: Request, res: Response) => {
        res.json({
            msg:'Usuario registrado'
        });
    }

}