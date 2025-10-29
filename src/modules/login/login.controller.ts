import {
  Controller,
  Logger,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  Get,
  UseGuards,
} from '@nestjs/common';
import { LoginService } from './login.service';
import {
  ApiBearerAuth,
  ApiNoContentResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { LoginResponseDto, MeResponseDto } from './dto/response/login.response';
import { LoginRequestDto } from './dto/request/login.request';
import { JwtAuthGuard } from './guards/jwt-auth.guards';
import { CtxUser } from './decorators';
import type { User } from '@prisma/client';

@ApiTags('login')
@Controller('auth')
export class LoginController {
  private readonly logger = new Logger('Login');
  constructor(private readonly loginService: LoginService) {}

  @Post('login')
  @ApiOperation({ summary: 'Login' })
  @ApiResponse({
    status: 200,
    description: 'User login successfully',
    type: LoginResponseDto,
  })
  async login(@Body() body: LoginRequestDto): Promise<LoginResponseDto> {
    this.logger.debug(`login`, body);
    const response = await this.loginService.login(body);
    this.logger.debug(`login`, response);
    return response;
  }

  @Post('logout')
  @ApiNoContentResponse({ description: 'Logout successful' })
  @HttpCode(HttpStatus.NO_CONTENT)
  logout(): void {
    this.logger.debug('logout');
  }

  @Get('me')
  @ApiBearerAuth() // показывает в Swagger, что нужен токен
  @ApiOperation({ summary: 'Get current user info' })
  @ApiResponse({ status: 200, description: 'Current user data returned' })
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  getMe(@CtxUser() user: User): MeResponseDto {
    const { password, passwordChangedAt, ...safeUser } = user;
    return safeUser;
  }
}
