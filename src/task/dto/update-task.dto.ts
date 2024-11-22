import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { IsNumber, IsString } from 'class-validator';
export class UpdateTaskDto extends PartialType(CreateTaskDto) {
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
