"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CtxUser = void 0;
const common_1 = require("@nestjs/common");
exports.CtxUser = (0, common_1.createParamDecorator)((userKey, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;
    if (!user) {
        throw new common_1.UnauthorizedException('User not authenticated');
    }
    return userKey ? user[userKey] : user;
});
//# sourceMappingURL=ctx-user.decorators.js.map