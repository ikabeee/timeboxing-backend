import { Injectable, NotFoundException } from '@nestjs/common';
import { Activity } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
/*
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
*/

@Injectable()
export class ActivityService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllActivities(): Promise<Activity[]> {
    const activity = await this.prisma.activity.findMany();
    if (activity.length === 0) {
      throw new NotFoundException('NO_TASKS_AVAILABLE');
    }
    return activity;
  }

  async getActivityById(id: number): Promise<Activity> {
    const activity = await this.prisma.activity.findUnique({
      where: { id },
    });
    if (!activity) {
      throw new NotFoundException('ACTIVITY_NOT_FOUND');
    }
    return activity;
  }
  async createActivity(activity: CreateActivityDto): Promise<Activity> {
    return this.prisma.activity.create({ data: { ...activity } });
  }

  async updateActivity(
    id: number,
    activity: UpdateActivityDto,
  ): Promise<Activity> {
    const findActivity = await this.prisma.activity.findUnique({
      where: { id },
    });

    if (!findActivity) {
      throw new NotFoundException('ACTIVITY_NOT_FOUND');
    }

    return this.prisma.activity.update({
      where: { id: id },
      data: { ...activity },
    });
  }

  async deleteActivity(id: number): Promise<void> {
    await this.prisma.activity.delete({
      where: { id },
    });
    console.log('Task deleted');
  }
}
