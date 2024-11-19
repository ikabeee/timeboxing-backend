import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { UserModule } from './user/user.module';
import { ActivityModule } from './activity/activity.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [TaskModule, UserModule, ActivityModule, PrismaModule],
})
export class AppModule {}
