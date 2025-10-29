import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class CreateResponseDto {
  @ApiProperty({
    description: 'Success message',
    example: 'User registered successfully',
  })
  @Expose()
  message: string;
}
