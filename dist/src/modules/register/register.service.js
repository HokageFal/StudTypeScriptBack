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
exports.RegisterService = void 0;
const common_1 = require("@nestjs/common");
const helpers_1 = require("../../common/helpers");
const user_repository_1 = require("./user.repository");
const exseptions_1 = require("./exseptions");
let RegisterService = class RegisterService {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async create(dto) {
        const { name, email, password } = dto;
        const hashedPassword = await helpers_1.PasswordHelper.hash(password);
        const userFirstEmail = await this.userRepository.getUserByEmail(email);
        if (userFirstEmail) {
            throw new exseptions_1.UserEmailExistsException(email);
        }
        await this.userRepository.create({
            name,
            email,
            password: hashedPassword,
        });
        return { message: `User registered successfully` };
    }
};
exports.RegisterService = RegisterService;
exports.RegisterService = RegisterService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], RegisterService);
//# sourceMappingURL=register.service.js.map