import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from '../register/user.repository';
import { LoginRequestDto } from './dto/request/login.request';
import { LoginResponseDto } from './dto/response/login.response';
import { UserNotFoundException } from './exseptions/user-not-found.exceptions';
import { PasswordHelper } from '../../common/helpers';
import { InvalidCredentialsException } from './exseptions/invalid-password.exception';
import { JwtPayload } from './login.interface';

@Injectable()
export class LoginService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userRepository: UserRepository,
  ) {}

  async login(dto: LoginRequestDto): Promise<LoginResponseDto> {
    const { email, password } = dto;

    const user = await this.userRepository.getUserByEmail(email);
    if (!user) {
      throw new UserNotFoundException(email);
    }

    const isPasswordValid = await PasswordHelper.compare(
      password,
      user.password,
    );
    if (!isPasswordValid) {
      throw new InvalidCredentialsException();
    }

    const payload: JwtPayload = {
      id: user.id,
      email: user.email,
      passwordChangeAt: user.passwordChangedAt.getTime(),
    };

    const token = this.jwtService.sign(payload);
    return { token };
  }
}
