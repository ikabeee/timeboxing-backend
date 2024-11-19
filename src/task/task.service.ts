import { Injectable, NotFoundException } from '@nestjs/common';
/*
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
*/

import { Task } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TaskService {
  constructor(private readonly prisma: PrismaService) {}

  async findAllTasks(): Promise<Task[]> {
    const tasks = await this.prisma.task.findMany();
    if (tasks.length === 0) {
      throw new NotFoundException('NO_TASKS_FOUND');
    }
    return tasks;
  }

  async findTaskById(id: number): Promise<Task> {
    const Task = this.prisma.task.findUnique({
      where: { id },
    });
    return Task;
  }

  /*
  findOne(id: number) {}
  update(id: number, updateTaskDto: UpdateTaskDto) {}
  remove(id: number) {}
  create(createTaskDto: CreateTaskDto) {
    return 'This action adds a new task';
  }
  */
}
