import { ConflictException } from '@nestjs/common';
export declare class UserEmailExistsException extends ConflictException {
    constructor(email?: string);
}
