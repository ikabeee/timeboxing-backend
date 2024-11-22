import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import {
  IsString,
  IsEmail,
  MinLength,
  MaxLength,
  IsNumber,
} from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsString()
  name: string;

  @IsString()
  lastName: string;

  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @MinLength(2)
  @MaxLength(12)
  password: string;

  @IsNumber()
  status: number;
}
