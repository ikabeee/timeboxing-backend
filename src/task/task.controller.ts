import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}
  @Get('all')
  async findAllTask() {
    return this.taskService.findAllTasks();
  }

  @Get(':id')
  async findTaskById(@Param('id', ParseIntPipe) id: string) {
    return this.taskService.findTaskById(+id);
  }

  @Post('createTask')
  async createTask(@Body() task: CreateTaskDto) {
    return this.taskService.createTask(task);
  }

  @Patch('updateTask/:id')
  updateTask(
    @Param('id', ParseIntPipe) id: string,
    @Body() task: UpdateTaskDto,
  ) {
    return this.taskService.updateTask(+id, task);
  }

  @Delete('delete/:id')
  deleteTask(@Param('id', ParseIntPipe) id: string) {
    return this.taskService.deleteTask(+id);
  }
}
