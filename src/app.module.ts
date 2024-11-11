import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { UserModule } from './user/user.module';
import { ActivityModule } from './activity/activity.module';

@Module({
  imports: [TaskModule, UserModule, ActivityModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
