"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BcryptAdapter = void 0;
const bcrypt_1 = require("bcrypt");
class BcryptAdapter {
}
exports.BcryptAdapter = BcryptAdapter;
BcryptAdapter.hash = (password) => {
    const salt = (0, bcrypt_1.genSaltSync)();
    return (0, bcrypt_1.hashSync)(password, salt);
};
BcryptAdapter.compare = (password, hashed) => {
    const salt = (0, bcrypt_1.genSaltSync)();
    return (0, bcrypt_1.compareSync)(password, hashed);
};
/*export class PasswordEncryptor {
    public async hashPassword(password: string): Promise<string> {
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password, salt);
    }

    public async comparePassword(password: string, hashedPassword: string): Promise<boolean> {
        return await bcrypt.compare(password, hashedPassword);
    }
}*/
