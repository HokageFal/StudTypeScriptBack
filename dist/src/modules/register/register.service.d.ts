import { CreateRequestDto } from './dto';
import { UserRepository } from './user.repository';
export declare class RegisterService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    create(dto: CreateRequestDto): Promise<{
        message: string;
    }>;
}
