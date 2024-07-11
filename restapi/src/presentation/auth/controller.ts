import { Response, Request } from "express";
import { CustomError, LoginUserDto, LoginUser, AuthRepository, RegisterUserDto, RegisterUser } from "../../domain";
import { userData } from "../../data/data";
import { RenewUser } from "../../domain/use-cases/renew.use-case";


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

    loginUser = async (req: Request, res: Response) => {

        const [error, loginUserDto] = LoginUserDto.create(req.body);

        if (error) return res.status(400).json({ error });


        /*res.json({
            msg: error
        });*/
        new LoginUser(this.authRepository)
            .execute(loginUserDto!)
            .then(data => res.json(data))
            .catch(error => this.handleError(error, res));
    }

    //Registro
    registerUser = async (req: Request, res: Response) => {

        const [error, registerUserDto] = RegisterUserDto.create(req.body);
        if (error) return res.status(400).json({ error });

        /*res.json({
            msg: error
        });*/
        new RegisterUser(this.authRepository)
            .execute(registerUserDto!)
            .then(data => res.json(data))
            .catch(error => this.handleError(error, res));
        console.log(userData);

    }

    renewUser = async (req: Request, res: Response) => {

        const user = req.body.user;


        new RenewUser()
            .execute(user)
            .then(data => res.json(data))
            .catch(error => this.handleError(error, res));
    }



}