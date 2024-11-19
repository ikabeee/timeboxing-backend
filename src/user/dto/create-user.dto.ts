import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  @IsString()
  lastName: string;
  @IsNotEmpty()
  @IsString()
  username: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(12)
  password: string;
}
