import { Body, Controller, Logger, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RegisterService } from './register.service';
import { CreateRequestDto, CreateResponseDto } from './dto';

@ApiTags('Register')
@Controller('register')
export class RegisterController {
  private readonly logger = new Logger('Register');
  constructor(private readonly registerService: RegisterService) {}

  @Post()
  @ApiOperation({ summary: 'Register user' })
  @ApiResponse({
    status: 201,
    description: 'User registered successfully',
    type: CreateResponseDto,
  })
  async register(@Body() body: CreateRequestDto): Promise<CreateResponseDto> {
    this.logger.debug(`register`, body);
    const response = await this.registerService.create(body);
    this.logger.debug(`register`, response);
    return response;
  }
}
