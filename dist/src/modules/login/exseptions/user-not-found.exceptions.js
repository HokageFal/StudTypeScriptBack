"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserNotFoundException = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("../../../common");
class UserNotFoundException extends common_1.NotFoundException {
    constructor(email) {
        super({
            message: `User with email ${email} not found`,
            code: common_2.ErrorCode.USER_NOT_FOUND,
        });
    }
}
exports.UserNotFoundException = UserNotFoundException;
//# sourceMappingURL=user-not-found.exceptions.js.map