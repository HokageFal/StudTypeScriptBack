import { Module } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { UserRepository } from '../register/user.repository';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtAuthGuard } from './guards/jwt-auth.guards';
import { JWTStrategy } from './strategies/jwt.strategies';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    ConfigModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
      }),
    }),
  ],
  controllers: [LoginController],
  providers: [
    PrismaService,
    LoginService,
    UserRepository,
    JWTStrategy,
    JwtAuthGuard,
  ],
  exports: [],
})
export class LoginModule {}
