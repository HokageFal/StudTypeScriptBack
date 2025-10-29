import { ConfigService } from '@nestjs/config';
import { UserRepository } from '../../register/user.repository';
import { JwtPayload } from '../login.interface';
import { User } from '@prisma/client';
declare const JWTStrategy_base: new (...args: any) => any;
export declare class JWTStrategy extends JWTStrategy_base {
    private readonly userRepository;
    private readonly logger;
    constructor(configService: ConfigService, userRepository: UserRepository);
    validate(payload: JwtPayload): Promise<User>;
}
export {};
