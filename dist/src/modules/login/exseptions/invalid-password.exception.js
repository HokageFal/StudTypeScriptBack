"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidCredentialsException = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("../../../common");
class InvalidCredentialsException extends common_1.UnauthorizedException {
    constructor() {
        super({
            message: 'Invalid email or password',
            code: common_2.ErrorCode.AUTH_INVALID_CREDENTIALS,
        });
    }
}
exports.InvalidCredentialsException = InvalidCredentialsException;
//# sourceMappingURL=invalid-password.exception.js.map