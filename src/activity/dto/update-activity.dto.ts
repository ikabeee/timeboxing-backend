/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateActivityDto } from './create-activity.dto';
import { IsNumber, IsString } from 'class-validator';

export class UpdateActivityDto extends PartialType(CreateActivityDto) {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  start_hour: string;

  @IsString()
  end_hour: string;

  @IsNumber()
  status: number;

  @IsString()
  due_date: string;
  
  @IsNumber()
  taskId: number;
}
