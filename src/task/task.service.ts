import { Injectable, NotFoundException } from '@nestjs/common';
/*
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
*/

import { Task } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
// import { CreateTaskDto } from './dto/create-task.dto';

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
  async createTask(createTask: CreateTaskDto): Promise<Task> {
    return this.prisma.task.create({ data: createTask });
  }
  async updateTask(id: number, task: UpdateTaskDto): Promise<Task> {
    const findTask = await this.prisma.task.findUnique({
      where: { id },
    });

    if (!findTask) {
      throw new NotFoundException('TASK_NOT_FOUND');
    }

    return this.prisma.task.update({
      where: { id: id },
      data: { ...task },
    });
  }
  async deleteTask(id: number): Promise<void> {
    const findTask = await this.prisma.task.findUnique({
      where: { id },
    });
    if (!findTask) {
      throw new NotFoundException('TASK_NOT_FOUND');
    }
    this.prisma.task.delete({
      where: { id },
    });
  }
}
