import { UnauthorizedException } from '@nestjs/common';

import { ErrorCode } from '../../../common';

export class InvalidCredentialsException extends UnauthorizedException {
  constructor() {
    super({
      message: 'Invalid email or password',
      code: ErrorCode.AUTH_INVALID_CREDENTIALS,
    });
  }
}
