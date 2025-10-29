import { LoginService } from './login.service';
import { LoginResponseDto } from './dto/response/login.response';
import { LoginRequestDto } from './dto/request/login.request';
import type { User } from '@prisma/client';
export declare class LoginController {
    private readonly loginService;
    private readonly logger;
    constructor(loginService: LoginService);
    login(body: LoginRequestDto): Promise<LoginResponseDto>;
    logout(): void;
    getMe(user: User): User;
}
