import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateActivityDto {
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsString()
  @IsNotEmpty()
  description: string;
  @IsString()
  @IsNotEmpty()
  start_hour: string;
  @IsString()
  @IsNotEmpty()
  end_hour: string;
  @IsNumber()
  @IsNotEmpty()
  status: number;
  @IsString()
  @IsNotEmpty()
  due_date: string;
  @IsNumber()
  taskId: number;
}
