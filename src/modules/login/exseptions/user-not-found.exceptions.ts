import { NotFoundException } from '@nestjs/common';

import { ErrorCode } from '../../../common';

export class UserNotFoundException extends NotFoundException {
  constructor(email: string) {
    super({
      message: `User with email ${email} not found`,
      code: ErrorCode.USER_NOT_FOUND,
    });
  }
}
