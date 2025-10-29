import { Injectable } from '@nestjs/common';
import { CreateRequestDto } from './dto';
import { PasswordHelper } from '../../common/helpers';
import { UserRepository } from './user.repository';
import { UserEmailExistsException } from './exseptions';

@Injectable()
export class RegisterService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(dto: CreateRequestDto): Promise<{ message: string }> {
    const { name, email, password } = dto;

    const hashedPassword = await PasswordHelper.hash(password);

    const userFirstEmail = await this.userRepository.getUserByEmail(email);
    if (userFirstEmail) {
      throw new UserEmailExistsException(email);
    }

    await this.userRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    return { message: `User registered successfully` };
  }
}
