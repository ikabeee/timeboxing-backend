import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  title: string;
  @IsString()
  description: string;
  @IsNumber()
  status: number;
  @IsString()
  due_date: string;
  @IsNumber()
  userId: number;
}
