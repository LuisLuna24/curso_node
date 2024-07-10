import bcrypt, { compareSync, genSaltSync, hashSync } from "bcrypt";

export class BcryptAdapter{
    static hash = (password: string)=>{
        const salt = genSaltSync();
        return hashSync(password, salt);
    }

    static compare = (password: string, hashed: string)=>{
        const salt = genSaltSync();
        return compareSync(password, hashed);
    }
}

/*export class PasswordEncryptor {
    public async hashPassword(password: string): Promise<string> {
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password, salt);
    }

    public async comparePassword(password: string, hashedPassword: string): Promise<boolean> {
        return await bcrypt.compare(password, hashedPassword);
    }
}*/



