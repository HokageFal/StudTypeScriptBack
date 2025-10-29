import {
  ExecutionContext,
  createParamDecorator,
  UnauthorizedException,
} from '@nestjs/common';
import type { Request } from 'express';
import { User } from '@prisma/client';

export const CtxUser = createParamDecorator(
  (userKey: keyof User | undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<Request>();
    const user = request.user as User;

    if (!user) {
      throw new UnauthorizedException('User not authenticated');
    }

    return userKey ? user[userKey] : user;
  },
);
