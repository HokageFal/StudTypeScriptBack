import { Module } from '@nestjs/common';
import { RegisterService } from './register.service';
import { RegisterController } from './register.controller';
import { PrismaService } from '../../prisma.service';
import { UserRepository } from './user.repository';

@Module({
  controllers: [RegisterController],
  providers: [RegisterService, PrismaService, UserRepository],
  exports: [UserRepository],
})
export class RegisterModule {}
