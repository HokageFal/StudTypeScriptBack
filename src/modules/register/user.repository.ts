import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../prisma.service';
import { Prisma, User } from '@prisma/client';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getUserByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async create(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({ data });
  }

  async update(email: string, data: Prisma.UserUpdateInput): Promise<User> {
    return this.prisma.user.update({
      where: { email },
      data,
    });
  }
}
