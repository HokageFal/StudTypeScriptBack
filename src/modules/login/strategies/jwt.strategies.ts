import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { UserRepository } from '../../register/user.repository';
import { JwtPayload } from '../login.interface';
import { User } from '@prisma/client';

@Injectable()
export class JWTStrategy extends PassportStrategy(Strategy) {
  private readonly logger = new Logger(JWTStrategy.name);

  constructor(
    configService: ConfigService,
    private readonly userRepository: UserRepository,
  ) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    super({
      secretOrKey: configService.getOrThrow<string>('JWT_SECRET'),
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(payload: JwtPayload): Promise<User> {
    this.logger.debug('Validating JWT payload', { email: payload.email });

    const user = await this.userRepository.getUserByEmail(payload.email);
    if (!user) {
      throw new UnauthorizedException();
    }

    // Проверка изменения пароля (опционально)
    if (
      payload.passwordChangeAt &&
      user.passwordChangedAt.getTime() !== payload.passwordChangeAt
    ) {
      throw new UnauthorizedException();
    }

    this.logger.debug(`User validated successfully: ${user.email}`);
    return user;
  }
}
