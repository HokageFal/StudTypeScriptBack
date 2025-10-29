"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEmailExistsException = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("../../../common");
class UserEmailExistsException extends common_1.ConflictException {
    constructor(email) {
        super({
            message: email
                ? `User with email ${email} already exists`
                : 'Email already exists',
            code: common_2.ErrorCode.USER_EMAIL_EXISTS,
        });
    }
}
exports.UserEmailExistsException = UserEmailExistsException;
//# sourceMappingURL=user-email-exists.exceptions.js.map