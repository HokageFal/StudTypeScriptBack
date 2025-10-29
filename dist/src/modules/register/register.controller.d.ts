import { RegisterService } from './register.service';
import { CreateRequestDto, CreateResponseDto } from './dto';
export declare class RegisterController {
    private readonly registerService;
    private readonly logger;
    constructor(registerService: RegisterService);
    register(body: CreateRequestDto): Promise<CreateResponseDto>;
}
