"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const user_repository_1 = require("../register/user.repository");
const user_not_found_exceptions_1 = require("./exseptions/user-not-found.exceptions");
const helpers_1 = require("../../common/helpers");
const invalid_password_exception_1 = require("./exseptions/invalid-password.exception");
let LoginService = class LoginService {
    jwtService;
    userRepository;
    constructor(jwtService, userRepository) {
        this.jwtService = jwtService;
        this.userRepository = userRepository;
    }
    async login(dto) {
        const { email, password } = dto;
        const user = await this.userRepository.getUserByEmail(email);
        if (!user) {
            throw new user_not_found_exceptions_1.UserNotFoundException(email);
        }
        const isPasswordValid = await helpers_1.PasswordHelper.compare(password, user.password);
        if (!isPasswordValid) {
            throw new invalid_password_exception_1.InvalidCredentialsException();
        }
        const payload = {
            id: user.id,
            email: user.email,
            passwordChangeAt: user.passwordChangedAt.getTime(),
        };
        const token = this.jwtService.sign(payload);
        return { token };
    }
};
exports.LoginService = LoginService;
exports.LoginService = LoginService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        user_repository_1.UserRepository])
], LoginService);
//# sourceMappingURL=login.service.js.map