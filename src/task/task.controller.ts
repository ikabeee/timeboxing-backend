import { Controller, Get, Param } from '@nestjs/common';
import { TaskService } from './task.service';
@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}
  @Get('all')
  async findAllTask() {
    return this.taskService.findAllTasks();
  }

  @Get(':id')
  findTaskById(@Param('id') id: string) {
    return this.taskService.findTaskById(+id);
  }

  // @Post()
  // create(@Body() createTaskDto: CreateTaskDto) {
  //   return this.taskService.create(createTaskDto);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
  //   return this.taskService.update(+id, updateTaskDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.taskService.remove(+id);
  // }
}
