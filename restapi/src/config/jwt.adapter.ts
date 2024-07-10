import jwt from 'jsonwebtoken';
import { envs } from './envs';
import { strict } from 'assert';

const JWT_SEED = envs.JWT_SEED;

export class JWTAdapter {
    static generateToken = async (payload: Object, duration: string = '2h'): Promise<string | null> => {
        return new Promise((resolve, reject) => {
            jwt.sign(payload, JWT_SEED, { expiresIn: duration }, (err, token) => {
                if (err) return resolve(null);
                
                resolve(token!);
            });
        });
    }

    static verifyToken <T>(token:string): Promise<T|null>{
        return new Promise((resolve, reject) => {
            jwt.verify(token, JWT_SEED, (err, decoded) => {
                if (err) return resolve(null);

                resolve(decoded as T);
            });
        });
    }
}


