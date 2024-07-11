import {Response, Request, NextFunction} from 'express';
import { JWTAdapter } from '../../config/jwt.adapter';
import { userData } from '../../data/data';
import { UserMapper } from '../../infrastructure/mappers/user.mapper';

export class AuthMiddleware{
    static async ValidateJTW(req: Request, res: Response, next: NextFunction){
        console.log(req.headers);
        const autorization = req.header('Authorization');

        if(!autorization) return res.status(401).json({error: "No token provide"});

        if(!autorization.startsWith('Bearer')) return res.status(401).json({error: "Invalid Bearer token"});

        const token = autorization.split(' ')[1] || 'Bearer';

        try {
            const payload = await JWTAdapter.verifyToken<{email:string}>(token);
            if(!payload) return res.status(401).json({error: "Invalid token"});

            const user = userData.find(user=>user.email === payload.email);

            if(!user) return res.status(401).json({error: "Invalid Token - user"});

            req.body.user = UserMapper.userEntityFromObject(user);
            console.log(req.body);
            next();
        }catch(err) {
            console.error(err);
            return res.status(500).json({error: "Internal server Error"});
        }
    }
}