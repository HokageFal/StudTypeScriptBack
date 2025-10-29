import { JwtService } from '@nestjs/jwt';
import { UserRepository } from '../register/user.repository';
import { LoginRequestDto } from './dto/request/login.request';
import { LoginResponseDto } from './dto/response/login.response';
export declare class LoginService {
    private readonly jwtService;
    private readonly userRepository;
    constructor(jwtService: JwtService, userRepository: UserRepository);
    login(dto: LoginRequestDto): Promise<LoginResponseDto>;
}
