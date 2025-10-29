import { ConflictException } from '@nestjs/common';
import { ErrorCode } from '../../../common';

export class UserEmailExistsException extends ConflictException {
  constructor(email?: string) {
    super({
      message: email
        ? `User with email ${email} already exists`
        : 'Email already exists',
      code: ErrorCode.USER_EMAIL_EXISTS,
    });
  }
}
