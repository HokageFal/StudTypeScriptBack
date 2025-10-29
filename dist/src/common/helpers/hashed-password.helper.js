"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordHelper = void 0;
const bcrypt_1 = require("bcrypt");
const BCRYPT_ROUNDS = 10;
class PasswordHelper {
    static async hash(password) {
        return (0, bcrypt_1.hash)(password, BCRYPT_ROUNDS);
    }
    static async compare(password, hash) {
        return (0, bcrypt_1.compare)(password, hash);
    }
}
exports.PasswordHelper = PasswordHelper;
//# sourceMappingURL=hashed-password.helper.js.map